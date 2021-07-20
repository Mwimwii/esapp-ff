export const data = {
  tab: 'Concept Note',
  titles: [
    'Project Title',
    'Estimated Cost',
    'Starting Date',
    'Operation Type',
    // "Implementation (Years)",
    'Status',
    // "Organisation",
    // "Date Created",
    // "Date Submitted"
  ],
  hasForm: false,
  fields: [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Name of Organisation',
        placeholder: 'Enter an Organization...',
        required: true,
      },
    },
    {
      key: 'acronym',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Acronym  of Organisation',
        placeholder: 'Enter the Organization Acronym...',
        required: true,
      },
    },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Type of Legal Registration',
        placeholder: 'Select Legal Registration Type',
        required: true,
      },
    },
    {
      key: 'reg',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Registration No',
        placeholder: 'Type the Registration Number...',
        required: true,
      },
    },
    {
      key: 'district',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'District',
        placeholder: 'Select District',
        required: true,
      },
    },
  ],
  data: [
    {
      '0': '1',
      '1': 'To Increase.',
      '2': 'K120,000',
      '3': '01/01/22',
      '4': 'Growth',
      // "5": "4 Years",
      '6': 'Planning',
      // "7": "Org",
      // "8": "Date Created"
    },
  ],
}
