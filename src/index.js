module.exports = function reverse (n) {
  return Array.from(Math.abs(n).toString()).reverse().join('')
}
