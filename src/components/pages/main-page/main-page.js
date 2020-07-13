import './main-page.scss';
import state from '../../../common/state';

class MainPage {
  view = `
    <div id="header_container-main"></div>
    <section class="section-main-page">
      <div class="section-main-page__banner">
        Hello, ${state.getName()}! Давай заниматься.
        <div class="section-main-page__banner--icon">
        </div>
      </div>
      <div class="section-main-page__menu">
        <div class="section-main-page__menu--start-studying">
          <div class="section-main-page__menu--start-studying-text">
            Good evening! - Добрый вечер!
          </div>
          <div class="btn btn--animated btn--blue">
            Выучить пару английских слов
          </div>
        </div>
        <div class="section-main-page__menu--statistics">
          <div class="section-main-page__menu--statistics-heading">
            Статистика
          </div>
          <div class="section-main-page__menu--statistics-text">
            Похоже, что вы только что зарегистрировались или очень давно не занимались
          </div>
          <div class="btn btn--animated btn--green" id="go-play-button">
            Го играть!
          </div>
          <div class="section-main-page__menu--statistics-icon">
          </div>
        </div>
      </div>
    </section>
  `;

  async render() {
    return this.view;
  }

  afterRender = async () => {
    document.getElementById('go-play-button').addEventListener('click', () => {
      document.location.href = '/#games';
    });
  }
}

export default new MainPage();
