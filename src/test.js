import loadSamples from './drumMachine/loadSamples';
import DrumMachine from './drumMachine/drumMachine';
import setUpUI from './drumMachine/ui';
import { Howl } from 'howler';

let step1 = { kick: true };
let step2 = { ch: true };
let step3 = { ch: true };
let step4 = { ch: true };
let step5 = { kick: true, clap: true };
let step6 = { ch: true };
let step7 = { ch: true };
let step8 = { clap: true };

document.addEventListener("DOMContentLoaded", () => {
  let howl = new Howl({
    src: ['assets/808-bd.wav'],
  })

  document.addEventListener('keypress', () => {
    howl.play();
  })
  // let samples = loadSamples();
  console.log(howl);
  // let drumMachine = new DrumMachine();
  // setUpUI(drumMachine);

  // let bd = document.getElementsByClassName('drum-cell-button');

  // bd.onclick = function () {
  //   playSound(drumMachine.drums.bd);
  // };

  // let steps = [step1, step2, step3, step4, step5, step6, step7, step8];

  // // setInterval(play, 125, howls, steps, stepNum)

  // function play(howls, steps) {
  //   let step = stepNum % 8;
  //   stepNum++;
  //   // console.log(step)

  //   for (let keys in steps[step]) {
  //     howls[keys].play();
  //   }
  // }

});

function playSound(howl){
  howl.play();
}