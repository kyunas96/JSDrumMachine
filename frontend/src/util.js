function calcIntervalStride(tempo){
  return tempo / 600;
}

function checkTempoInput(str){
  const regEx = /^\d+$/;
  if(!regEx.test(str)){
    return false;
  }else{
    const numericalValue = parseInt(str);
    return (numericalValue >= 50 && numericalValue <= 200);
  }
}

module.exports = {
  calcIntervalStride,
  checkTempoInput
}