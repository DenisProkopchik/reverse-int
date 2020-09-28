module.exports = function reverse(n) {
  n.toString()[0] === "-" ? n = Number(n.toString().slice(1)) : null;
  return Number(n.toString().split("").reverse().join(''));
}
