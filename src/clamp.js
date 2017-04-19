// @flow

const clamp = (l: number) =>
  (h: number) =>
    (x: number): number =>
      x > h
        ? h
        : x < l
          ? l
          : x

export default clamp
