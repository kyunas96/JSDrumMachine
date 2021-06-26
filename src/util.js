function calcIntervalStride(tempo){
  return tempo / 600;
}

function allNumbers(str){
  const regEx = /^\d+$/;
  return regEx.test(str);
}

function getValueFromEvent(event){
  
}

module.exports = {
  calcIntervalStride,
  allNumbers
}