import loadSamples from './loadSamples';
import DrumMachine from './drumMachine';
import { JS808_view } from '../views/JS-808_view';
import setUpUI from './ui';

document.addEventListener("DOMContentLoaded", () => {
  // let drumMachine = new DrumMachine(loadSamples());
  // setUpUI(drumMachine);

  let body = document.getElementById("root");
  body.innerHTML(JS808_view);
})