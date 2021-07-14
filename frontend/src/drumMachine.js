import { calcIntervalStride, checkTempoInput } from "./util";
import StepContainer from "./stepContainer";
import { drumNames } from "./config";

export default class DrumMachine {
  constructor(sounds) {
    this.drums = sounds;
    this.currentSoundIndex = 0;
    this.currentSoundName = drumNames[this.currentSoundIndex];
    this.setTempo(200);
    this.intervalStride = calcIntervalStride(this.tempo);
    this.playing = false;
    this.editing = false;
    this.sequencer = new Array(16).fill().map((u) => StepContainer(11));
    this.playStep = this.playStep.bind(this);
    this.checkStep = this.checkStep.bind(this);
    this.setDeceleratingTimeout = this.setDeceleratingTimeout.bind(this);
    this.player = null;
    this.playSound = this.playSound.bind(this);
    this.currentStep = 0;
  }

  play(){
    this.player = setInterval((stepNum) => {
      this.playStep();
    }, this.tempo);
  }

  cancelPlay(){
    console.log("player", this.player)
    clearInterval(this.player);
  }

  setCurrentSound(drumNum) {
    if (!this.recording) {
      this.currentSoundName = drumNum;
    }
  }

  setTempo(tempo) {
    if(checkTempoInput(tempo)){
      console.log()
      this.tempo = parseInt(tempo);
    }else{
      this.tempo = this.tempo;
    }
    return this.tempo;
  }

  toggleStep(stepNumber) {
    let curStep = this.sequencer[stepNumber];
    console.log("curStep", curStep);
    curStep[this.currentSoundIndex] = !curStep[this.currentSoundIndex]
    console.log(this.sequencer);
    this.toggleIndicators();
  }

  toggleIndicators() {
    let activeCells = this.grabActiveCells();
    let drumNodes = document.getElementsByClassName("drum-cell-button");
    let drumCellButtons = Array.from(drumNodes);
    for (let i = 0; i < drumCellButtons.length; i++) {
      let curIndicator = drumCellButtons[i].getElementsByClassName("indicator")[0];
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
    this.sequencer.forEach((step, i) => {
      if (step[this.currentSound] === true) {
        activeCellIndices.push(i);
      }
    });
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

  checkStep(){
    if(this.currentStep > 15){
      this.currentStep = 0;
    }
    return this.currentStep++;
  }

  playStep() {
    const curStep = this.sequencer[this.checkStep()];
    console.log("playing step: " + JSON.stringify(curStep));
    console.log(this.drums);
    for(let i = 0; i < this.sequencer.length; i++){
      if(curStep[i] === true){
        console.log(this.drums[i])
        this.drums[i].play()
      }
    }

    // for (const [drum, trigger] of Object.entries(curStep)) {
    //   if (trigger) {
    //     this.drums[drum].play();
    //   }
    // }
  }

  setDeceleratingTimeout(callback, factor, times) {
    const checkPlaying = this.isPlaying.bind(this);
    const checkTempo = this.getTempo.bind(this);
    var internalCallback = (function (tick) {
      return function () {
        if(tick++ >= 15){
          tick = 0;
        }
        console.log(tick)
        if (checkPlaying()) {
          window.setTimeout(internalCallback, factor);
          callback(tick);
        }
      };
    }).bind(this)(times);

    window.setTimeout(internalCallback, factor);
  }

  isPlaying(){
    return this.playing;
  }


  getTempo(){
    return this.tempo;
  }

  playSound(drumNum) {
    console.log("drumNum", drumNum)
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

    if(this.player === null){
      this.play();
    }else{
      this.cancelPlay();
      this.player = null;
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
