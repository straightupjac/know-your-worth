import { FieldSet, Records } from "airtable";

const minifyItems = (records: Records<FieldSet>) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record: any) => {
  const { id, fields } = record;
  let minifiedFields: any = {};
  minifiedFields.jobTitle = { value: fields['Job title'], fullname: 'Job Title' }
  minifiedFields.companyType = { value: fields['Company Type'], fullname: 'Company Type' }
  minifiedFields.companyStage = { value: fields['Company stage'], fullname: 'Company stage' }
  minifiedFields.employmentType = { value: fields['Employment type'], fullname: 'Employment type' }
  minifiedFields.remoteOrInPerson = { value: fields['Remote or in-person'], fullname: 'Remote or in-person' }
  minifiedFields.annualBase = { value: fields['Annual base'], fullname: 'Annual base' }
  minifiedFields.additionalComp = { value: fields['Additional comp'], fullname: 'Additional comp' }
  minifiedFields.equity = { value: fields['Annual equity'], fullname: 'Annual equity' }
  minifiedFields.tokenGrant = { value: fields['Annual token grant'], fullname: 'Annual token grant' }
  minifiedFields.bonus = { value: fields['Annual bonus'], fullname: 'Annual bonus' }
  minifiedFields.signOnBonus = { value: fields['Sign-on bonus'], fullname: 'Sign-on bonus' }
  minifiedFields.benefits = { value: fields['Other benefits'], fullname: 'Other benefits' }
  minifiedFields.outputFactor = { value: fields['Do you feel comp reflects work product and output'], fullname: 'Do you feel comp reflects work product and output' }
  minifiedFields.equitableFactor = { value: fields['Do you feel comp is equitable to peers'], fullname: 'Do you feel comp is equitable to peers' }
  minifiedFields.yearsOfExperience = { value: fields['Overall years of experience'], fullname: 'Overall years of experience' }
  minifiedFields.web3yearsOfExperience = { value: fields['Web3 years of experience'], fullname: 'Web3 years of experience' }
  minifiedFields.identity = { value: fields['Identity tags'], fullname: 'Identity tags' }
  minifiedFields.demographic = { value: fields['Racial/ethnic identity'], fullname: 'Racial/ethnic identity' }
  minifiedFields.location = { value: fields['Location'], fullname: 'Location' }
  minifiedFields.hasKids = { value: fields['Kids'], fullname: 'Kids' }
  minifiedFields.comments = { value: fields['Other company type (describe)'], fullname: 'Other company type (describe)' }

  return minifiedFields;
};

export { minifyItems, getMinifiedItem };