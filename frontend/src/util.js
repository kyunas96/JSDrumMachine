const KNOB_MIN = -40;
const KNOB_MAX = 40;
const SPEED_MIN = 50;
const SPEED_MAX = 200;

function getTempoFromKnob(value){
  const normalized = getNormalizedFromKnob(KNOB_MIN, KNOB_MAX, value);
  const diff = 1.0 - normalized;
  return lerpKnobInput(SPEED_MIN, SPEED_MAX, diff);
}

// getTempoFromKnob helper functions
function getNormalizedFromKnob(lowerBound, upperBound, input){
  const totalRange = Math.abs(lowerBound) + Math.abs(upperBound);
  const adjustedInput = Math.abs(lowerBound) + input;
  return adjustedInput / totalRange;
}

function getVolumeFromKnob(input){
  return getNormalizedFromKnob(KNOB_MIN, KNOB_MAX, input);
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
  const adjuestedInput = input - lowerBound;
  return adjuestedInput / totalRange;
}

function lerpTempo(lowerBound, upperBound, normalizedInput){
  const totalRange = Math.abs(upperBound) + Math.abs(lowerBound);
  return Math.ceil(totalRange * normalizedInput - Math.abs(lowerBound));
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
  KNOB_MIN,
  KNOB_MAX,
  getNormalizedFromKnob,
  getVolumeFromKnob,
  getTempoFromKnob,
  getKnobValFromTempo,
  checkTempoInput
}