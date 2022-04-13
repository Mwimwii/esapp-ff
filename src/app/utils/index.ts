export const genericField = (kval, klabel, kplaceholder, required = false) => {
  return {
    key: kval,
    type: 'input',
    templateOptions: {
      type: 'text',
      label: klabel,
      placeholder: kplaceholder,
      required: required,
    },
  }
}
export const genericSectionLabel = (klabel, separator = false) => {
  let sep_tag = ''
  if (separator) {
    sep_tag = '<hr />'
  }
  return {
    className: 'section-label',
    template: `${sep_tag}<strong>${klabel}:</strong></div><br />`,
  }
}
