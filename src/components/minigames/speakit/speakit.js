import './speakit.scss';

class Speakit {
  speakItContainer = null;

  startGameButton = null;

  constructor() {
    this.goToMainGamePage = this.goToMainGamePage.bind(this);
  }

  view = `
<section class="speakit" id="speakit-container">
<div class="wrapper">
<div class="bubbles-container">
  <svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 701 1024" style="overflow: visible;">
      <g class="bubbles-large" stroke-width="7">
          <g>
              <g transform="translate(10 940)">
                  <circle cx="35" cy="35" r="35"/>
              </g>
          </g>
          <g>
              <g transform="translate(373 940)">
                  <circle cx="35" cy="35" r="35"/>
              </g>
          </g>
          <g>
              <g transform="translate(408 940)">
                  <circle cx="35" cy="35" r="35"/>
              </g>
          </g>
          <g>
              <g transform="translate(621 940)">
                  <circle cx="35" cy="35" r="35"/>
              </g>
          </g>
          <g>
              <g transform="translate(179 940)">
                  <circle cx="35" cy="35" r="35"/>
              </g>
          </g>
      </g>

      <g class="bubbles-small" stroke-width="4">
          <g>
              <g transform="translate(147 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(255 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(573 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(429 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(91 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(640 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(321 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(376 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(376 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
          <g>
              <g transform="translate(497 984)">
                  <circle cx="15" cy="15" r="15"/>
              </g>
          </g>
      </g>

  </svg>
</div>
<div class="speakit-start__wrapper">
  <h1 class="speakit-start__title">Speak it</h1>
  <div class="speakit-start__button" id="start-game-button">Начать игру</div>
</div>
</div>
</section>
        `;

mainGamePage = `
<div class="speakit__wrapper">
1241241
</div>
`;

async render() {
  return this.view;
}

async afterRender() {
  this.speakItContainer = document.getElementById('speakit-container');
  this.startGameButton = document.getElementById('start-game-button');
  this.startGameButton.addEventListener('click', this.goToMainGamePage);
}

goToMainGamePage() {
  this.speakItContainer.innerHTML = this.mainGamePage;
}
}

export default new Speakit();
