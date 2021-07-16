import loadSamples from './808/loadSamples';
import DrumMachine from './drumMachine';
import { setup808Controller } from './808/setupController';
import setupInstructions from './setupInstructions';

document.addEventListener("DOMContentLoaded", () => {
  /* 
    drumMachine loading example:

    const drumMachine = setup707DrumMachine();
    setup707ViewAndController(drumMachine);
  */
//  loadSamples();
  const drumMachine = new DrumMachine(loadSamples())
  window.drumMachine = drumMachine;
  setup808Controller(drumMachine);
  setupInstructions();
});