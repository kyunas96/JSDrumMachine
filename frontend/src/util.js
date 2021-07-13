const KNOB_MIN = -40;
const KNOB_MAX = 40;
const TEMPO_MIN = 50;
const TEMPO_MAX = 200;

function getTempoFromKnob(value){
  const normalized = getNormalizedFromKnob(KNOB_MIN, KNOB_MAX, value);
  return lerpKnobInput(TEMPO_MIN, TEMPO_MAX, normalized);
}

// getTempoFromKnob helper functions
function getNormalizedFromKnob(lowerBound, upperBound, input){
  const totalRange = Math.abs(lowerBound) + Math.abs(upperBound);
  const adjustedInput = Math.abs(lowerBound) + input;
  return adjustedInput / totalRange;
}


function lerpKnobInput(lowerBound, upperBound, normalizedInput){
  const totalRange = upperBound - lowerBound;
  return Math.ceil(totalRange * normalizedInput + lowerBound);
}

function getKnobValFromTempo(tempo){
  const normalized = getNormalizedFromTempo(TEMPO_MIN, TEMPO_MAX, tempo);
  return lerpTempo(KNOB_MIN, KNOB_MAX, normalized);
}

function getNormalizedFromTempo(lowerBound, upperBound, input){
  const totalRange = upperBound - lowerBound;
  console.log("totalRange", totalRange)
  const adjuestedInput = input - lowerBound;
  return adjuestedInput / totalRange;
}

function lerpTempo(lowerBound, upperBound, normalizedInput){
  const totalRange = Math.abs(upperBound) + Math.abs(lowerBound);
  return Math.ceil(totalRange * normalizedInput - Math.abs(lowerBound));
}

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
  getTempoFromKnob,
  getKnobValFromTempo,
  calcIntervalStride,
  checkTempoInput
}