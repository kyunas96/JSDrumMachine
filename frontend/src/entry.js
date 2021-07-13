import loadSamples from './808/loadSamples';
import DrumMachine from './drumMachine';
import { setup808Controller } from './808/setupController';

document.addEventListener("DOMContentLoaded", () => {
  /* 
    drumMachine loading example:

    const drumMachine = setup707DrumMachine();
    setup707ViewAndController(drumMachine);
  */
//  loadSamples();
  const drumMachine = new DrumMachine(loadSamples())
  setup808Controller(drumMachine);
});