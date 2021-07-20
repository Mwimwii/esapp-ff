export const data = {
  tab: 'Application',
  titles: ['Applicant', 'Organisation', 'Status', 'Date Created', 'Date Submitted'],
  hasForm: false,
  fields: [
    {
      key: 'applicant',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Applicant',
        placeholder: 'Select an Applicant...',
        required: true,
      },
    },
    {
      key: 'organization',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Organisation',
        placeholder: 'Select an Organization...',
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
      '1': 'Justin Bwalya...',
      '2': 'SZI',
      '3': 'Approved by PCO',
      '4': '01/20/20',
      '5': '01/21/20',
    },
  ],
}
