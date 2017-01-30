// takes input in format #rrggbb (hex)
const getComplimentaryColors = s =>
  '#' + (1e5 + (8 ** 8 + ~('0x' + s.slice(1))).toString(16)).slice(-6)
// or
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))
export default getComplimentaryColors
