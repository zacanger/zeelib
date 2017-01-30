// yes, really
const leftPad = (str, len, pd = ' ') =>
  Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str
export default leftPad
