export const data = {
  tab: 'Organization',
  titles: ['Name', 'Acronym', 'Type', 'Registration No', 'District'],
  hasForm: true,
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
      '1': 'Enhanced Smallhoder...',
      '2': 'ESAPP',
      '3': 'Programme',
      '4': '293932',
      '5': 'Lusaka',
    },
    {
      '0': '2',
      '1': 'Enhanced Smallhoder...',
      '2': 'ESAPP',
      '3': 'Programme',
      '4': '293932',
      '5': 'Lusaka',
    },
  ],
}
