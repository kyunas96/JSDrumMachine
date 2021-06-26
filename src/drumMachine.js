import { calcIntervalStride, allNumbers } from "./util";
import StepContainer from "./stepContainer";
import { drumNames } from "./config";

export default class DrumMachine {
  constructor(sounds) {
    this.drums = sounds;
    this.setCurrentSound("bd");
    this.setTempo(120);
    this.intervalStride = calcIntervalStride(this.tempo);
    this.playing = false;
    this.editing = false;
    this.sequencer = new Array(16).fill().map((u) => StepContainer(drumNames));
    this.setDeceleratingTimeout = this.setDeceleratingTimeout.bind(this);
  }

  setCurrentSound(name) {
    if (!this.recording) {
      this.currentSound = name;
    }
    let sampleDisplay = document.getElementsByClassName(
      "current-sample-display"
    )[0];
    sampleDisplay.innerHTML = this.currentSound;
  }

  setTempo(tempo) {
    if(tempo >= 50 && tempo <= 200){
      this.tempo = tempo;
    }
    let tempoDisplay = document.getElementsByClassName("tempo-display")[0];
    tempoDisplay.value = this.tempo;
    console.log("tempo: " + this.tempo)
  }

  toggleStep(stepNumber) {
    let curStep = this.sequencer[stepNumber];
    Object.assign(curStep, {
      [this.currentSound]: !curStep[this.currentSound],
    });
    console.log(this.sequencer);
    this.toggleIndicators();
  }

  toggleIndicators() {
    let activeCells = this.grabActiveCells();
    let drumNodes = document.getElementsByClassName("drum-cell-button");
    let drumCellButtons = Array.from(drumNodes);
    for (let i = 0; i < drumCellButtons.length; i++) {
      let curCell = drumCellButtons[i].children[0];
      if (activeCells.includes(i)) {
        curCell.classList.add("armed");
      } else {
        curCell.classList.remove("armed");
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

  play() {
    const myFunc = this.playStep.bind(this);
    console.log(myFunc);
    this.setDeceleratingTimeout(myFunc, 125, -1);
  }

  playStep(stepNum) {
    const curStep = this.sequencer[stepNum];
    console.log("playing step: " + stepNum);
    for (const [drum, trigger] of Object.entries(curStep)) {
      if (trigger) {
        this.drums[drum].play();
      }
    }
  }

  // setDeceleratingTimeout(callback, factor, stepNum) {
  //   console.log(factor);
  //   console.log("playing: " + this.playing);

  //   var internalCallback = (function (tick) {
  //     console.log("ticking: " + tick);
  //     if (tick++ > 15) {
  //       tick = 0;
  //     }
  //     return function () {
  //       if (this.playing) {
  //         window.setTimeout(internalCallback, factor, tick);
  //         callback(tick);
  //       }
  //     };
  //   })(stepNum);

  //   window.setTimeout(internalCallback, factor, stepNum);
  // }

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

  playSound(sound) {
    sound.play();
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
    this.playing = !this.playing;
    console.log("playing: " + this.playing);
    if(this.playing){
      this.play();
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
