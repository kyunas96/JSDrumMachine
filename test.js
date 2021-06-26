import loadSamples from './src/loadSamples';
// import DrumMachine from './src/drumMachine';
// import setUpUI from './src/ui';
import { JS707, JS808, JS909 } from './src/config';
import { patchKeyToSound } from './src/setup';

document.addEventListener("DOMContentLoaded" , () => {
  let sounds = loadSamples(JS707.samples);  
  // Object.keys(sounds).forEach((sound, i ) => {
  //   console.log(i, sound)
  // })

  document.addEventListener("keypress", function (e) {
    patchKeyToSound(sounds, JS707.keys)(e.key)
  });
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