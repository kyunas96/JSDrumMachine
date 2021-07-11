import loadSamples from './loadSamples';
import DrumMachine from './drumMachine';
import setUpUI from './ui';

document.addEventListener("DOMContentLoaded", () => {
  /* 
    drumMachine loading example:
    
    const drumMachine = setup707DrumMachine();
    setup707ViewAndController(drumMachine);
  */
  setUpUI(drumMachine);
});