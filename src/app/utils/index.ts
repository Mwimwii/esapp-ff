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

export const dateDiffInDays = (a, b) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
