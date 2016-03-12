Armstrong_number = n => {
  a = ("" + n).split('')
  l = a.length
  a.map(v => n -= Math.pow(v, l))
  return !n
}