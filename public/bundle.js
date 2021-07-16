/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/drumMachine.js":
/*!*************************************!*\
  !*** ./frontend/src/drumMachine.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DrumMachine)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./frontend/src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stepContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepContainer */ \"./frontend/src/stepContainer.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/drumNames'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './accurateTimer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar DrumMachine = /*#__PURE__*/function () {\n  function DrumMachine(sounds) {\n    _classCallCheck(this, DrumMachine);\n\n    this.drums = sounds;\n    this.currentSoundIndex = 0;\n    this.currentSoundName = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/drumNames'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.currentSoundIndex];\n    this.speed = 175;\n    this.playing = false;\n    this.editing = false;\n    this.sequencer = new Array(16).fill().map(function (u) {\n      return (0,_stepContainer__WEBPACK_IMPORTED_MODULE_1__.default)(11);\n    });\n    this.playStep = this.playStep.bind(this);\n    this.checkStep = this.checkStep.bind(this);\n    this.playSound = this.playSound.bind(this);\n    this.currentStep = 0;\n    this.player = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './accurateTimer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.playStep, this.speed);\n    console.log(\"dm\", this);\n  }\n\n  _createClass(DrumMachine, [{\n    key: \"changeSpeed\",\n    value: function changeSpeed(newSpeed) {\n      this.speed = newSpeed;\n      this.player.interval = newSpeed;\n    }\n  }, {\n    key: \"setCurrentSound\",\n    value: function setCurrentSound(drumNum) {\n      if (!this.recording) {\n        this.currentSoundIndex = drumNum;\n      }\n    }\n  }, {\n    key: \"setTempo\",\n    value: function setTempo(tempo) {\n      if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.checkTempoInput)(tempo)) {\n        console.log();\n        this.tempo = parseInt(tempo);\n      } else {\n        this.tempo = this.tempo;\n      }\n\n      return this.tempo;\n    }\n  }, {\n    key: \"toggleStep\",\n    value: function toggleStep(stepNumber) {\n      var curStep = this.sequencer[stepNumber];\n      console.log(\"curStep\", curStep);\n      curStep[this.currentSoundIndex] = !curStep[this.currentSoundIndex];\n      console.log(this.sequencer);\n      this.toggleIndicators();\n    }\n  }, {\n    key: \"toggleIndicators\",\n    value: function toggleIndicators() {\n      var activeCells = this.grabActiveCells();\n      var drumNodes = document.getElementsByClassName(\"drum-cell-button\");\n      console.log(\"drumNodes\", drumNodes);\n\n      for (var i = 0; i < drumNodes.length; i++) {\n        var curIndicator = drumNodes[i].getElementsByClassName(\"indicator\")[0];\n        console.log(curIndicator);\n\n        if (activeCells.includes(i)) {\n          curIndicator.classList.add(\"armed\");\n        } else {\n          curIndicator.classList.remove(\"armed\");\n        }\n      }\n    }\n  }, {\n    key: \"grabActiveCells\",\n    value: function grabActiveCells() {\n      // sequencer is an array, no need for `for...in` loop\n      var activeCellIndices = [];\n\n      for (var i = 0; i < this.sequencer.length; i++) {\n        var curStep = this.sequencer[i];\n\n        if (curStep[this.currentSoundIndex] === true) {\n          activeCellIndices.push(i);\n        }\n      }\n\n      return activeCellIndices;\n    }\n  }, {\n    key: \"clearIndicators\",\n    value: function clearIndicators() {\n      var armedNodes = document.getElementsByClassName(\"armed\");\n      var armedCellButtons = Array.from(armedNodes);\n\n      for (var i = 0; i < armedCellButtons.length; i++) {\n        var curCell = armedCellButtons[i];\n        curCell.classList.remove(\"armed\");\n      }\n    }\n  }, {\n    key: \"checkStep\",\n    value: function checkStep() {\n      if (this.currentStep > 15) {\n        this.currentStep = 0;\n      }\n\n      return this.currentStep++;\n    }\n  }, {\n    key: \"playStep\",\n    value: function playStep() {\n      var curStep = this.sequencer[this.checkStep()];\n      console.log(\"playing step: \" + JSON.stringify(curStep));\n      console.log(this.drums);\n\n      for (var i = 0; i < this.sequencer.length; i++) {\n        if (curStep[i] === true) {\n          console.log(this.drums[i]);\n          this.drums[i].play();\n        }\n      }\n    }\n  }, {\n    key: \"isPlaying\",\n    value: function isPlaying() {\n      return this.playing;\n    }\n  }, {\n    key: \"getTempo\",\n    value: function getTempo() {\n      return this.tempo;\n    }\n  }, {\n    key: \"playSound\",\n    value: function playSound(drumNum) {\n      this.drums[drumNum].play();\n    }\n  }, {\n    key: \"toggleEdit\",\n    value: function toggleEdit() {\n      this.editing = !this.editing;\n\n      if (this.editing) {\n        this.toggleIndicators();\n      } else {\n        this.clearIndicators();\n      }\n\n      console.log(\"editing: \" + this.editing);\n    }\n  }, {\n    key: \"togglePlay\",\n    value: function togglePlay() {\n      // this.playing = !this.playing;\n      // console.log(\"playing: \" + this.playing);\n      // if(this.playing){\n      //   this.play();\n      // }\n      if (this.playing) {\n        this.player.stop();\n        this.playing = false;\n      } else {\n        this.player.start();\n        this.playing = true;\n      }\n    } // will take in the array of\n\n  }, {\n    key: \"indicateCurrentSound\",\n    value: function indicateCurrentSound(buttons) {\n      var _this = this;\n\n      buttons.array.forEach(function (button) {\n        if (button.drum === _this.setCurrentSound) {\n          // go through the child nodes and add `active` as a class to the\n          // inidicator element\n          button.childNodes;\n        }\n      });\n    }\n  }]);\n\n  return DrumMachine;\n}();\n\n\n\n//# sourceURL=webpack://drum-machine/./frontend/src/drumMachine.js?");

/***/ }),

/***/ "./frontend/src/entry.js":
/*!*******************************!*\
  !*** ./frontend/src/entry.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/loadSamples'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _drumMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drumMachine */ \"./frontend/src/drumMachine.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/setupController'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './setupInstructions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  /* \n    drumMachine loading example:\n     const drumMachine = setup707DrumMachine();\n    setup707ViewAndController(drumMachine);\n  */\n  //  loadSamples();\n  var drumMachine = new _drumMachine__WEBPACK_IMPORTED_MODULE_1__.default(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/loadSamples'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());\n  window.drumMachine = drumMachine;\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './808/setupController'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(drumMachine);\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './setupInstructions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n});\n\n//# sourceURL=webpack://drum-machine/./frontend/src/entry.js?");

/***/ }),

/***/ "./frontend/src/stepContainer.js":
/*!***************************************!*\
  !*** ./frontend/src/stepContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StepContainer)\n/* harmony export */ });\nfunction StepContainer(numDrums) {\n  return new Array(numDrums).fill(false);\n}\n\n//# sourceURL=webpack://drum-machine/./frontend/src/stepContainer.js?");

/***/ }),

/***/ "./frontend/src/util.js":
/*!******************************!*\
  !*** ./frontend/src/util.js ***!
  \******************************/
/***/ ((module) => {

eval("var KNOB_MIN = -40;\nvar KNOB_MAX = 40;\nvar SPEED_MIN = 50;\nvar SPEED_MAX = 200;\n\nfunction getTempoFromKnob(value) {\n  var normalized = getNormalizedFromKnob(KNOB_MIN, KNOB_MAX, value);\n  var diff = 1.0 - normalized;\n  return lerpKnobInput(SPEED_MIN, SPEED_MAX, diff);\n} // getTempoFromKnob helper functions\n\n\nfunction getNormalizedFromKnob(lowerBound, upperBound, input) {\n  var totalRange = Math.abs(lowerBound) + Math.abs(upperBound);\n  var adjustedInput = Math.abs(lowerBound) + input;\n  return adjustedInput / totalRange;\n}\n\nfunction getVolumeFromKnob(input) {\n  return getNo(KNOB_MIN, KNOB_MAX, input);\n}\n\nfunction lerpKnobInput(lowerBound, upperBound, normalizedInput) {\n  var totalRange = upperBound - lowerBound;\n  return Math.ceil(totalRange * normalizedInput + lowerBound);\n}\n\nfunction getKnobValFromTempo(tempo) {\n  var normalized = getNormalizedFromTempo(TEMPO_MIN, TEMPO_MAX, tempo);\n  return lerpTempo(KNOB_MIN, KNOB_MAX, normalized);\n}\n\nfunction getNormalizedFromTempo(lowerBound, upperBound, input) {\n  var totalRange = upperBound - lowerBound;\n  console.log(\"totalRange\", totalRange);\n  var adjuestedInput = input - lowerBound;\n  return adjuestedInput / totalRange;\n}\n\nfunction lerpTempo(lowerBound, upperBound, normalizedInput) {\n  var totalRange = Math.abs(upperBound) + Math.abs(lowerBound);\n  return Math.ceil(totalRange * normalizedInput - Math.abs(lowerBound));\n}\n\nfunction checkTempoInput(str) {\n  var regEx = /^\\d+$/;\n\n  if (!regEx.test(str)) {\n    return false;\n  } else {\n    var numericalValue = parseInt(str);\n    return numericalValue >= 50 && numericalValue <= 200;\n  }\n}\n\nmodule.exports = {\n  KNOB_MIN: KNOB_MIN,\n  KNOB_MAX: KNOB_MAX,\n  getNormalizedFromKnob: getNormalizedFromKnob,\n  getVolumeFromKnob: getVolumeFromKnob,\n  getTempoFromKnob: getTempoFromKnob,\n  getKnobValFromTempo: getKnobValFromTempo,\n  checkTempoInput: checkTempoInput\n};\n\n//# sourceURL=webpack://drum-machine/./frontend/src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/src/entry.js");
/******/ 	
/******/ })()
;