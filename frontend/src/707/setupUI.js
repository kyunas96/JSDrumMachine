import { getTempoFromKnob } from "./util";

function setupKnob() {
  const knob = document.querySelector("input-knob");
  knob.addEventListener("knob-move-end", () => {
    const stringToNum = parseFloat(knob.value);
    console.log(getTempoFromKnob(stringToNum));
  });
}

function createStepCell(drumName, drum){

}

function createSequencer(drums, drumMachine){

}

function createSlider(drumName, drum){

}

function createSliders(drums, drumMachine){

}

function setupDisplay(drumMachine){

}

function setupDrumSelector(drumMachine){
  
}




export function setup707UI() {

  setupKnob()
}
