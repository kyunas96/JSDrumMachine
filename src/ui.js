// UI functions must hook into the state of the drum machine


export default function setupUI(drumMachine){
  bindSoundsToCells(drumMachine);
  bindTransportControls(drumMachine);
}

function bindTransportControls(drumMachine){
  let startStopButton = document.getElementsByClassName("start-stop-button")[0];
  console.log(startStopButton);
  startStopButton.onclick = () => drumMachine.togglePlay();
  let editButton = document.getElementsByClassName("edit-button")[0];
  editButton.onclick = () => drumMachine.toggleEdit();
}

function bindSoundsToCells(drumMachine){
  let drumCellButtons = Array.from(
    document.getElementsByClassName("drum-cell-button")
  );
  drumCellButtons.forEach((drum) => {
    if (drum.id !== "") {
      drum.onclick = function () {
        if (!drumMachine.editing)
          drumMachine.setCurrentSound(drum.id)
          drumMachine.playSound(drumMachine.drums[drum.id]);
      };
    }
  });
}