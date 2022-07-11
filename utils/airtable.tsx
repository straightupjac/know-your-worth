import { FieldSet, Records } from "airtable";

const minifyItems = (records: Records<FieldSet>) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record: any) => {
  const { id, fields } = record;
  let minifiedFields: any = {};
  minifiedFields.jobTitle = fields['Job title'];
  minifiedFields.companyType = fields['Company type'];
  minifiedFields.companyStage = fields['Company stage'];
  minifiedFields.employmentType = fields['Employment type'];
  minifiedFields.remoteOrInPerson = fields['Remote or in-person'];
  minifiedFields.annualBase = fields['Annual base'];
  minifiedFields.additionalComp = fields['Additional comp'];
  minifiedFields.equity = fields['Annual equity'];
  minifiedFields.tokenGrant = fields['Annual token grant'];
  minifiedFields.bonus = fields['Annual bonus'];
  minifiedFields.signOnBonus = fields['Sign-on bonus'];
  minifiedFields.benefits = fields['Other benefits'];
  minifiedFields.outputFactor = fields['Do you feel comp reflects work product and output'];
  minifiedFields.equitableFactor = fields['Do you feel comp is equitable to peers'];
  minifiedFields.yearsOfExperience = fields['Overall years of experience'];
  minifiedFields.web3yearsOfExperience = fields['Web3 years of experience']
  minifiedFields.identity = fields['Identity tags'];
  minifiedFields.demographic = fields['Racial/ethnic identity'];
  minifiedFields.location = fields['Location'];
  minifiedFields.hasKids = fields['Kids'];
  minifiedFields.comments = fields['Other company type (describe)'];

  return minifiedFields;
};

export { minifyItems, getMinifiedItem };