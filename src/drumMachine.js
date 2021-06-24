import { calcIntervalStride } from "./util";
import StepContainer from './stepContainer';
import { drumNames } from './config';

export default class DrumMachine{
  constructor(sounds){
    this.drums = sounds;
    this.setCurrentSound('bd');
    this.setTempo(120);
    this.intervalStride = calcIntervalStride(this.tempo);
    this.playing = false;
    this.editing = false;
    this.sequencer = new Array(16).fill().map(u => StepContainer(drumNames))
    console.log(this);
  }

  setCurrentSound(name){
    if(!this.recording){
      this.currentSound = name;
    }
    let sampleDisplay = document.getElementsByClassName('current-sample-display')[0];
    sampleDisplay.innerHTML = this.currentSound;
  }

  setTempo(tempo){
    this.tempo = tempo;
    let tempoDisplay = document.getElementsByClassName('tempo-display')[0];
    tempoDisplay.innerHTML = this.tempo;
  }

  toggleStep(stepNumber){
    let curStep = this.sequencer[stepNumber];
    Object.assign(curStep, { [this.currentSound]: !curStep[this.currentSound]})
    this.toggleIndicators()
  }

  toggleIndicators(){
    let activeCells = this.grabActiveCells();
    let drumNodes = document.getElementsByClassName('drum-cell-button');
    let drumCellButtons = Array.from(drumNodes);
    for(let i = 0; i < drumCellButtons.length; i++){
      let curCell = drumCellButtons[i].children[0];
      if(activeCells.includes(i)){
        curCell.classList.add('armed');
      }else{
        curCell.classList.remove('armed');
      }
    }


    // activeCells.forEach(activeIndex => {
    //   console.log(drumCellButtons[activeIndex].children[0].classList.toggle('armed'))
    // })
  }

  grabActiveCells(){
    // sequencer is an array, no need for `for...in` loop
    let activeCellIndices = [];
    this.sequencer.forEach((step, i) => {
      if(step[this.currentSound] === true){
        activeCellIndices.push(i)
      }
    })
    return activeCellIndices;
  }


  playSound(sound){
    sound.play()
  }

  toggleEdit(){
    this.editing = !this.editing
    console.log('editing: ' + this.editing)
  }

  togglePlay(){
    this.playing = !this.playing
    console.log('playing: ' + this.playing)
  }


  // will take in the array of 
  indicateCurrentSound(buttons){
    buttons.array.forEach(button => {
      if (button.drum === this.setCurrentSound){
        // go through the child nodes and add `active` as a class to the 
        // inidicator element
        button.childNodes
      }
    });
  }
}