const getRandomHex32 = (hexN = '') =>
  hexN.length < 32
    ? getRandomHex32(hexN + (Math.random() + Math.random()).toString(16).slice(2))
    : hexN.slice(0, 32)
export default getRandomHex32
