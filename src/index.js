module.exports = function reverse (n) {
    let num = Math.abs(n);
  //console.log(num);
  let str = String(num).split('').reverse().join('');
  console.log(+str);
  return Number(str); 
}
