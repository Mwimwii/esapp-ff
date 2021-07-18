export const data = {
  tab: 'Approval',
  titles: [
    'Organisation',
    'Concept Note',
    'Scores',
    'Comment',
    'Review Submission',
    'Reviewed By',
    // "Certify Remark",
    // "Certify Submission",
    // "Certified By",
    // "Approval Remark",
    // "Approve Submission",
    // "Approved By",
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
      '000': '1',
      '001': 'SZI',
      '002': 'To increase.',
      '003': '3/3',
      '004': 'Very Good',
      '005': '*',
      '006': 'Mwila Nyirongo',
      // "007": "Wow",
      // "008": "*",
      // "009": "David Mbewe",
      // "010": "👏👏👏",
      // "011": "*",
      // "012": "Elemson Muyanga"
    },
  ],
}
