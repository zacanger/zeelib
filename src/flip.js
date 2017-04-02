const flip = (f) =>
  (a) =>
    (b) =>
      f(b)(a)

export default flip
