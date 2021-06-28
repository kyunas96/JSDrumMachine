// UI functions must hook into the state of the drum machine
import { keysForDrums } from "./config";
import { allNumbers } from "./util";

export default function setupUI(drumMachine) {
  bindSoundsToCells(drumMachine);
  bindTransportControls(drumMachine);
  mapPlayToSpacebar(drumMachine);
  mapSamplesToSampleDisplay(drumMachine);
}

function bindTransportControls(drumMachine) {
  let startStopButton = document.getElementsByClassName("start-stop-button")[0];
  startStopButton.onclick = () => drumMachine.togglePlay();
  let editButton = document.getElementsByClassName("edit-button")[0];
  editButton.onclick = () => drumMachine.toggleEdit();
}

function bindSoundsToCells(drumMachine) {
  let drumCellButtons = Array.from(
    document.getElementsByClassName("drum-cell-button")
  );
  drumCellButtons.forEach((drum, i) => {
    if (drum.id !== "") {
      drum.onclick = drumPlayAndToggle(drumMachine, drum);
      mapSoundToKey(drumMachine, drum.id, keysForDrums[i]);
    }else{
      drum.onclick = drumToggle(drumMachine, drum);
    }
  });
}

function drumPlayAndToggle(drumMachine, drum) {
  const drumId = drum.id;
  const drumNum = drum.getAttribute("num");
  return function () {
    if (!drumMachine.editing) {
      drumMachine.setCurrentSound(drumId);
      drumMachine.playSound(drumMachine.drums[drumId]);
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

function drumToggle(drumMachine, drum) {
  const drumNum = drum.getAttribute("num");
  return function(){
    if(drumMachine.editing){
      drumMachine.toggleStep(drumNum);
    }
  }
}

function mapSoundToCell(drumMachine, drum) {
  const drumId = drum.id;
  const drumNum = drum.getAttribute("num");
  return function () {
    if (!drumMachine.editing) {
      drumMachine.setCurrentSound(drumId);
      drumMachine.playSound(drumMachine.drums[drumId]);
    } else {
      // in the case that the drumMachine is in edit mode, when drum cells are
      // clicked they should toggle the `currentSound` in the stepContainer
      // corresponding to the cell that was clicked on
      // ex. If i click on the 5th step cell while in edit mode, the `currentSound`
      // should be toggled for the 5th stepContainer in the sequencer
      // drumMachine
      // console.log("bang");
      drumMachine.toggleStep(drumNum)
    }
  };
}

function mapToggleToCell(drumMachine, drumNum) {
  let currentStep = drumMachine.sequencer[drumNum];
  currentStep[drumMachine.currentSound] =
    !currentStep[drumMachine.currentSound];
    
  console.log(currentStep);
}

function mapSoundToKey(drumMachine, drumName, key) {
  addEventListener("keydown", function (e) {
    if (e.key === key) {
      drumMachine.playSound(drumMachine.drums[drumName]);
      drumMachine.setCurrentSound(drumName);
    }
  });
}

function mapSamplesToSampleDisplay(drumMachine){
  const sampleDisplay = document.getElementById("sample-display");
  sampleDisplay.onchange = function(e){
    const currentDrum = this.options[this.selectedIndex].value;
    drumMachine.setCurrentSound(currentDrum);
  }
  // console.log(drumMachine.drums);
  for(const drum in drumMachine.drums){
    const option = document.createElement('option');
    option.value = drum;
    option.text = drum;
    sampleDisplay.appendChild(option)
  }
}

function mapPlayToSpacebar(drumMachine){
  addEventListener("keydown", function(e) {
    if(e.key === " "){
      drumMachine.togglePlay()
    }
  })
}
