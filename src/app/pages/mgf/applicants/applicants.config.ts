export const data = {
  tab: 'Applicant',
  titles: ['First Name', 'Last Name', 'Mobile', 'Type', 'District', 'Date Created'],
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
      '1': 'Daniel...',
      '2': 'Chirwa',
      '3': '0922838382',
      '4': 'Cooperative',
      '5': 'Lusaka',
      '6': '09/21/21',
    },
    {
      '0': '1',
      '1': 'Justin',
      '2': 'Bwalya',
      '3': '+4403838382',
      '4': 'Cooperative',
      '5': 'Wales',
      '6': '09/10/21',
    },
  ],
}
