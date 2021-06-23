import { calcIntervalStride } from "./util";
import StepContainer from './stepContainer';

export default class DrumMachine{
  constructor(sounds){
    this.drums = sounds;
    this.currentSound = this.setCurrentSound('bd');
    this.tempo = 120;
    this.intervalStride = calcIntervalStride(this.tempo);
    this.playing = false;
    this.editing = false;
    this.sequencer = new Array(16).fill(StepContainer(['kick']))
  }

  setCurrentSound(name){
    if(!this.recording){
      this.currentSound = name;
    }
    console.log(this.currentSound)
    let sampleDisplay = document.getElementsByClassName('current-sample-display')[0];
    console.log(sampleDisplay);
    sampleDisplay.innerHTML = this.currentSound;

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