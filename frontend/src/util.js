function calcIntervalStride(tempo){
  return tempo / 600;
}

function allNumbers(str){
  const regEx = /^\d+$/;
  return regEx.test(str);
}

module.exports = {
  calcIntervalStride,
  allNumbers
}