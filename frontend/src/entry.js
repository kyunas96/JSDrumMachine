import loadSamples from './707/loadSamples';
import DrumMachine from './drumMachine';
import { setup808UI } from './808/setupUI';

document.addEventListener("DOMContentLoaded", () => {
  /* 
    drumMachine loading example:

    const drumMachine = setup707DrumMachine();
    setup707ViewAndController(drumMachine);
  */
//  loadSamples();
  const drumMachine = new DrumMachine(loadSamples())
  setup808UI(drumMachine);
});