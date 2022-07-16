import { FieldSet, Records } from "airtable";

const minifyItems = (records: Records<FieldSet>) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record: any) => {
  const { fields } = record;
  return fields;
};

export { minifyItems, getMinifiedItem };