import { getTempoFromKnob, getKnobValFromTempo } from "../util";
import { drumNames } from "./drumNames";

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

function createStepCell(drumName, drum, i) {
  return `
    <div class="drum-cell" id="${drumName}" num="${i}">
        <div class="drum-cell-title">${drumName}</div>
        <div class="drum-cell-button"></div>
          <div class="drum-cell-header">
            <div class="indicator"></div>
            <span>${i + 1}</span>
          </div>
    </div>
  `;
}

function createSequencer(drums, drumMachine) {
  const sequencer = document.getElementById("sequencer");
  const drumCells = [];
}

function createSlider(drumName, drum) {}

function createSliders(drums, drumMachine) {}

function setupDisplay(drumMachine) {}

function setupDrumSelector(drumMachine) {}

export function setup808UI(drumMachine) {
  // createSequencer(drumMachine);
  // createSliders(drumMachine);
  setupTempoDisplay(drumMachine);
  setupKnob();
}
