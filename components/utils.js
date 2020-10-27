export function isDef(value) {
  return value !== undefined && value !== null
}
export function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined
  }
  value = String(value)
  return isNumber(value) ? `${value}px` : value
}
export function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value)
}