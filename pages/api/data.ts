// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable, { FieldSet, Records } from 'airtable';
import Cors from 'cors'
import { minifyItems } from '@utils/airtable';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse<Return>,
  fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


type Return = {
  message: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Return | any[]>
) {
  await runMiddleware(req, res, cors)

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method should be GET' });
  }
  const USE_CACHE = process.env.USE_CACHE === 'true';

  if (USE_CACHE) {
    res.setHeader('Cache-Control', 's-maxage=86400');
  }

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return res.status(405).json({ message: 'Missing Airtable config' });
  }

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_API_KEY,
  });

  var base = Airtable.base(AIRTABLE_BASE_ID);
  const table = base(AIRTABLE_TABLE_NAME);
  try {
    let recordsArray: Records<FieldSet> = [];

    await table.select({
    }).eachPage((records, fetchNextPage) => {
      recordsArray = [...recordsArray, ...records];
      fetchNextPage();
    })
      .catch(error => { console.error(error); return false; })

    res.status(200).json(minifyItems(recordsArray));
  } catch (error) {
    console.error('err @ /data', error);
    res.status(500).json({ message: "Something went wrong! 😕" });
  }

}
