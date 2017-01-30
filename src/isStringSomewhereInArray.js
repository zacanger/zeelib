// [Str] -> Str -> Bool
const isStringSomewhereInArray = (arr, el) =>
  arr.some(a => el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase()))
export default isStringSomewhereInArray
