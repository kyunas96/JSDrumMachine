import { checkTempoInput } from "./util";
import StepContainer from "./stepContainer";
import drumNames from "./808/drumNames";
import AdjustingInterval from "./accurateTimer";

export default class DrumMachine {
  constructor(sounds) {
    this.drums = sounds;
    this.currentSoundIndex = 0;
    this.currentSoundName = drumNames[this.currentSoundIndex];
    this.speed = 175;
    this.playing = false;
    this.editing = false;
    this.sequencer = new Array(16).fill().map((u) => StepContainer(11));
    this.playStep = this.playStep.bind(this);
    this.checkStep = this.checkStep.bind(this);
    this.playSound = this.playSound.bind(this);
    this.currentStep = 0;
    this.player = new AdjustingInterval(this.playStep, this.speed);
    console.log("dm", this);
  }

  changeSpeed(newSpeed){
    this.speed = newSpeed;
    this.player.interval = newSpeed;
  }

  setCurrentSound(drumNum) {
    if (!this.recording) {
      this.currentSoundIndex = drumNum;
    }
  }

  setTempo(tempo) {
    if (checkTempoInput(tempo)) {
      console.log();
      this.tempo = parseInt(tempo);
    } else {
      this.tempo = this.tempo;
    }
    return this.tempo;
  }

  toggleStep(stepNumber) {
    let curStep = this.sequencer[stepNumber];
    console.log("curStep", curStep);
    curStep[this.currentSoundIndex] = !curStep[this.currentSoundIndex];
    console.log(this.sequencer);
    this.toggleIndicators();
  }

  toggleIndicators() {
    let activeCells = this.grabActiveCells();
    let drumNodes = document.getElementsByClassName("drum-cell-button");
    console.log("drumNodes", drumNodes)
    for (let i = 0; i < drumNodes.length; i++) {
      let curIndicator =
        drumNodes[i].getElementsByClassName("indicator")[0];
        console.log(curIndicator);
      if (activeCells.includes(i)) {
        curIndicator.classList.add("armed");
      } else {
        curIndicator.classList.remove("armed");
      }
    }
  }

  grabActiveCells() {
    // sequencer is an array, no need for `for...in` loop
    let activeCellIndices = [];
    for(let i = 0; i < this.sequencer.length; i++){
      const curStep = this.sequencer[i];
      if(curStep[this.currentSoundIndex] === true){
        activeCellIndices.push(i)
      }
    }
    return activeCellIndices;
  }

  clearIndicators() {
    let armedNodes = document.getElementsByClassName("armed");
    let armedCellButtons = Array.from(armedNodes);
    for (let i = 0; i < armedCellButtons.length; i++) {
      let curCell = armedCellButtons[i];
      curCell.classList.remove("armed");
    }
  }

  checkStep() {
    if (this.currentStep > 15) {
      this.currentStep = 0;
    }
    return this.currentStep++;
  }

  playStep() {
    const curStep = this.sequencer[this.checkStep()];
    console.log("playing step: " + JSON.stringify(curStep));
    console.log(this.drums);
    for (let i = 0; i < this.sequencer.length; i++) {
      if (curStep[i] === true) {
        console.log(this.drums[i]);
        this.drums[i].play();
      }
    }
  }

  isPlaying() {
    return this.playing;
  }

  getTempo() {
    return this.tempo;
  }

  playSound(drumNum) {
    this.drums[drumNum].play();
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.toggleIndicators();
    } else {
      this.clearIndicators();
    }
    console.log("editing: " + this.editing);
  }

  togglePlay() {
    // this.playing = !this.playing;
    // console.log("playing: " + this.playing);
    // if(this.playing){
    //   this.play();
    // }

    if (this.playing) {
      this.player.stop();
      this.playing = false;
    } else {
      this.player.start();
      this.playing = true;
    }
  }

  // will take in the array of
  indicateCurrentSound(buttons) {
    buttons.array.forEach((button) => {
      if (button.drum === this.setCurrentSound) {
        // go through the child nodes and add `active` as a class to the
        // inidicator element
        button.childNodes;
      }
    });
  }
}
