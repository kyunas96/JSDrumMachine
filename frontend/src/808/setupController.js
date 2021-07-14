import { getTempoFromKnob, getKnobValFromTempo, getVolumeFromKnob } from "../util";
import keysForDrums from "./drumKeys";
import drumNames from "./drumNames";
import { throttle } from 'underscore';
import { Howler } from 'howler';

function setupKnob() {
  const knob = document.querySelector("input-knob#tempo");
  const tempoDisplay = document.getElementById("tempo-display");
  knob.addEventListener("knob-move-end", () => {
    const stringToNum = parseFloat(knob.value);
    const newVal = getTempoFromKnob(stringToNum);
    tempoDisplay.value = newVal;
    console.log(newVal);
  });
}

function setupVolumeSliders(drumMachine){
  const sliders = document.querySelectorAll("input-knob.gain")
  for(let i = 0; i < sliders.length; i++){
    const curSlider = sliders[i];
    curSlider.value = 40;

    function setVolumeFromSlider(){
      const stringToNum = parseFloat(this.value);
      const volume = getVolumeFromKnob(stringToNum);
      drumMachine.drums[i].volume(volume);
    }

    let sliderFunc;

    if(i === sliders.length - 1){
      function masterVolume(){
        const stringToNum = parseFloat(this.value);
        const volume = getVolumeFromKnob(stringToNum);
        Howler.volume(volume);
      }
      sliderFunc = throttle(masterVolume, 100).bind(curSlider);
    }else{
      sliderFunc = throttle(setVolumeFromSlider, 100).bind(curSlider)
    }

    curSlider.addEventListener("knob-move-change", () => {
      sliderFunc()
      console.log(drumMachine.drums)
    })
  }
}

function bindTransportControls(drumMachine){
  let startStopButton = document.getElementById("start-stop-button");
  startStopButton.onclick = () => drumMachine.togglePlay();
  let editButton = document.getElementById("edit-button-container");
  editButton.onclick = () => drumMachine.toggleEdit();
}

function setupTempoDisplay(drumMachine) {
  const tempoDisplay = document.getElementById("tempo-display");
  const knob = document.querySelector("input-knob#tempo");
  tempoDisplay.value = drumMachine.tempo;
  tempoDisplay.onchange = (e) => {
    drumMachine.setTempo(e.currentTarget.value);
    const stringToNum = parseInt(e.currentTarget.value);
    knob.value = getKnobValFromTempo(stringToNum)
  };
}

function bindSoundsToCells(drumMachine) {
  let drumCells = Array.from(
    document.getElementsByClassName("drum-cell")
  );

  console.log("drumCells", drumCells);

  drumCells.forEach((drum, i) => {
    if (drum.id !== "") {
      drum.onclick = drumPlayAndToggle(drumMachine, drum);
      mapSoundToKey(drumMachine, i, keysForDrums[i]);
    }else{
      drum.onclick = drumToggle(drumMachine, drum);
    }
  });
}

function drumPlayAndToggle(drumMachine, drum) {
  const drumNum = drum.getAttribute("num");
  return function () {
    if (!drumMachine.editing) {
      drumMachine.setCurrentSound(drumNum);
      drumMachine.playSound(drumNum);
    } else {
      // in the case that the drumMachine is in edit mode, when drum cells are
      // clicked they should toggle the `currentSound` in the stepContainer
      // corresponding to the cell that was clicked on
      // ex. If i click on the 5th step cell while in edit mode, the `currentSound`
      // should be toggled for the 5th stepContainer in the sequencer
      // drumMachine
      // console.log("bang");
      drumMachine.toggleStep(drumNum);
    }
  };
}

function mapSoundToKey(drumMachine, drumNum, key) {
  addEventListener("keydown", function (e) {
    if (e.key === key) {
      drumMachine.playSound(drumNum);
      drumMachine.setCurrentSound(drumNum);
    }
  });
}

function drumToggle(drumMachine, drum) {
  const drumNum = drum.getAttribute("num");
  return function () {
    if (drumMachine.editing) {
      drumMachine.toggleStep(drumNum);
    }
  };
}


export function setup808Controller(drumMachine) {
  bindTransportControls(drumMachine);
  setupTempoDisplay(drumMachine);
  setupKnob();
  setupVolumeSliders(drumMachine);
  bindSoundsToCells(drumMachine);
}
