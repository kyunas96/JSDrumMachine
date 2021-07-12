import loadSamples from './707/loadSamples';
import DrumMachine from './drumMachine';
import { setup707UI } from './707/setupUI';

document.addEventListener("DOMContentLoaded", () => {
  /* 
    drumMachine loading example:

    const drumMachine = setup707DrumMachine();
    setup707ViewAndController(drumMachine);
  */
  const drumMachine = new DrumMachine(loadSamples())
  setup707UI(drumMachine);
});