const clamp = (l) =>
  (h) =>
    (x) => {
      console.error('`clamp is deprecated`')
      return x > h ? h : x < l ? l : x
    }

export default clamp
