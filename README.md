[JS Drum Machine](http://javascript-drum-machine.herokuapp.com/)
=================

![](./images/drumMachine.png)

JSDrumMachine is an interactive drum machine based on the [Roland TR-808](https://en.wikipedia.org/wiki/Roland_TR-808) originally released in 1980. All sounds are sourced from the original machine. 

## Table of Contents
  * [Technologies](#technologies)
  * [Solution Highlights](#solution-highlights)

### Technologies
  * JavaScript
  * [input-knob](https://www.npmjs.com/package/input-knob)
  * [Howler.js](https://howlerjs.com)
  * [Node.js](https://nodejs.org/en/)
  * [Express.js](https://www.npmjs.com/package/express)
  * [Webpack](https://www.npmjs.com/package/webpack)

### Solution Highlights

- `bindSoundsToCells` takes in an instance of drumMachine and attatches mouse and keyboard events to each of the drums within the drumMachine
- `mapSoundToKey` takes in the instance of drumMachine to get access to the drums and binds play functionality for the drum at the index to the key at the index stored in an array used for key mappings: `keysForDrums`
- An if statement checks to see if there is a named drum associated with the html node in the array, if it does not then it is strictly used for toggling steps and not playing sounds

```js
  function bindSoundsToCells(drumMachine) {
    let drumCells = Array.from(document.getElementsByClassName("drum-cell"));

    drumCells.forEach((drum, i) => {
      if (drum.id !== "") {
        drum.onclick = drumPlayAndToggle(drumMachine, drum);
        mapSoundToKey(drumMachine, i, keysForDrums[i]);
      } else {
        drum.onclick = drumToggle(drumMachine, drum);
      }
    });
}
```

- `playStep` is a member function of the DrumMachine class that iterates over the `sequencer` attribute, a container for the 16 steps of the DrumMachine
- Each step in the `sequencer` represents the toggle status of each of the drums for a particular step
- To play one of the 16 steps, an entire step of the `sequencer` is iterated over to see which of the drums are toggled. If so it will play the sound from the `drums` array whose indices correspond to those of the drums represented in the step

```js
  playStep() {
    const curStep = this.sequencer[this.checkStep()];
    for (let i = 0; i < this.sequencer.length; i++) {
      if (curStep[i] === true) {
        this.drums[i].play();
      }
    }
  }
```

- To simplify the behavior of the knobs and preserve visually appealing termintating end points, linear interpolation converts the knob's range to acceptable ranges for the particular drum parameter
- Since all numbers in JavaScript are floats, resulting ints need not be casted to floats

```js
function getNormalizedFromKnob(lowerBound, upperBound, input) {
  const totalRange = Math.abs(lowerBound) + Math.abs(upperBound);
  const adjustedInput = Math.abs(lowerBound) + input;
  return adjustedInput / totalRange;
}
```

- To orient the knobs in succession of one another I used a flexbox container for all the knobs with `flex-direction:row ` and placed each knob within their own flexbox container with `flex-direction:column`

```css
#knobs {
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.knob-container {
  font-family: sans-serif;
  color: rgb(200, 200, 200);
  height: 100%;
  width: 12.5%;
  display: flex;
  flex-direction: column;
}
```

  
