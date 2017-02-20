// @flow

const take = (n: number, a: any[]) : any[] => {
  const alen = a.length
  if (n > alen) return a
  const a1 = []
  for (let i = 0; i < n && i < alen; i++) {
    a1.push(a[i])
  }
  return a1
}

export default take
