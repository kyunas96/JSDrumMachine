import './JS-808.scss';

export const JS808_view = `<div id="container">
      <span id="drum-machine-header">JS Drum Machine</span>
      <div class="drum-machine">
        <div class="drum-machine-shoulder"></div>
        <div class="drum-machine-housing">
          <div class="drum-machine-upper">
            <div class="drum-machine-upper-left">
              <div class="info-display">
                <input type="text" id="tempo-display" />
                <select id="sample-display"></select>
              </div>
              <div class="tempo-knob">
                <div></div>
              </div>
            </div>
            <div class="drum-machine-upper-right">
              <div class="title-container">
                <div class="title">Rhythm Composer</div>
                <div class="subtitle">JS-808</div>
              </div>
            </div>
          </div>
          <div class="drum-machine-lower">
            <div class="transport-controls">
              <div class="start-stop-button">
                <div class="start-button">Start</div>
                <div class="stop-button">Stop</div>
              </div>
              <div class="edit-button-container">
                <div class="edit-button"></div>
                Edit
              </div>
            </div>
            <div class="sequencer">
              <div class="drum-cell">
                <div class="drum-cell-title">BD</div>
                <div id="bd" num="0" class="drum-cell-button red">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">SD</div>
                <div id="sd" num="1" class="drum-cell-button red">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">LT</div>
                <div id="lt" num="2" class="drum-cell-button red">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">MT</div>
                <div id="mt" num="3" class="drum-cell-button red">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">HT</div>
                <div id="ht" num="4" class="drum-cell-button orange">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">RS</div>
                <div id="rs" num="5" class="drum-cell-button orange">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">CP</div>
                <div id="cp" num="6" class="drum-cell-button orange">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">CB</div>
                <div id="cb" num="7" class="drum-cell-button orange">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">CY</div>
                <div id="cy" num="8" class="drum-cell-button yellow">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">OH</div>
                <div id="oh" num="9" class="drum-cell-button yellow">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title">CH</div>
                <div id="ch" num="10" class="drum-cell-button yellow">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title"></div>
                <div num="11" class="drum-cell-button yellow">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title"></div>
                <div num="12" class="drum-cell-button white">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title"></div>
                <div num="13" class="drum-cell-button white">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title"></div>
                <div num="14" class="drum-cell-button white">
                  <div class="indicator"></div>
                </div>
              </div>
              <div class="drum-cell">
                <div class="drum-cell-title"></div>
                <div num="15" class="drum-cell-button white">
                  <div class="indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="drum-machine-shoulder"></div>
      </div>`;