import initializeSounds from './src/initializeSounds';
// import DrumMachine from './src/drumMachine';
// import setUpUI from './src/ui';
import kits from './src/kits/kits';
import { setUpKeys } from './src/setup';
import JS808view from '../JS808view';

document.addEventListener("DOMContentLoaded" , () => {
  const body = document.getElementsByTagName("BODY")[0];
  console.log(body);
  body.innerHTML = JS808view;
  // const sounds = initializeSounds(kits.JS707.samples);
  // const names = kits.JS707.names;
  // const keys = kits.JS707.keys;

  // console.log(sounds);
  // setUpKeys(sounds, kits.JS707.keys);
})





// let step1 = { kick: true };
// let step2 = { ch: true };
// let step3 = { ch: true };
// let step4 = { ch: true };
// let step5 = { kick: true, clap: true };
// let step6 = { ch: true };
// let step7 = { ch: true };
// let step8 = { clap: true };

// document.addEventListener("DOMContentLoaded", () => {
//   let drumMachine = new DrumMachine(loadSamples());
//   setUpUI(drumMachine);

//   let bd = document.getElementsByClassName('drum-cell-button');

//   bd.onclick = function () {
//     playSound(drumMachine.drums.bd);
//   };

//   let steps = [step1, step2, step3, step4, step5, step6, step7, step8];


//   function play(howls, steps) {
//     let step = stepNum % 8;
//     stepNum++;
//     // console.log(step)

//     for (let keys in steps[step]) {
//       howls[keys].play();
//     }
//   }

// });

// function playSound(howl){
//   howl.play();
// }