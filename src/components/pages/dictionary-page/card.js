/* eslint-disable no-underscore-dangle */
import CardType from './card-type';
import WordService from '../../../services/WordService';

class Card {
  constructor(data, type) {
    this.data = data;
    this.type = type;
  }

  render() {
    return `
    <div class="dictionary-card" id="${this.data._id}-card">
      <div class="dictionary-card__progress"></div>
      <div>
        <span class="dictionary-card__word">${this.data.word}</span>
        <img src="../../../assets/images/dictionary/sound.png" class="dictionary-card__word-sound" alt="Воспроизвести слово" id="${this.data._id}-play-sound">
        <img src="../../../assets/images/dictionary/preview.png" class="dictionary-card__word-preview" title="Показать/скрыть изображение" alt="Показать/скрыть изображение" id="${this.data._id}-show-image">
      </div>
      <div class="dictionary-card__translation">${this.data.wordTranslate}</div>
      <div class="dictionary-card__description">
        <div>${this.data.textExample}</div>
        <div>${this.data.transcription}</div>
        <div>${this.data.textMeaning}</div>
      </div>
      <div class="dictionary-card__repetition"></div>
      <div class="dictionary-card__actions">${this.renderActions()}</div>
    </div>`;
  }

  async afterRender() {
    WordService.getWordWithAssets(this.data._id).then((word) => {
      this.data = { ...this.data, ...word };
      const cardActions = document.getElementById(`${this.data._id}-card`);
      cardActions.innerHTML += `
      <img src="data:image/jpg;base64,${this.data.image}" style="display: none; width: 100%" id="${this.data._id}-image">
      <audio src="data:audio/mpeg;base64,${this.data.audio}" style="display: none" id="${this.data._id}-audio"></audio>
    `;
      const playSound = document.getElementById(`${this.data._id}-play-sound`);
      const showImage = document.getElementById(`${this.data._id}-show-image`);

      showImage.addEventListener('click', () => {
        const button = document.getElementById(`${this.data._id}-image`);
        const current = button.style.display;
        button.style.display = current === 'block' ? 'none' : 'block';
      });

      playSound.addEventListener('click', () => {
        const sound = document.getElementById(`${this.data._id}-audio`);
        sound.play();
      });
    });
  }

  renderActions() {
    if (this.type === CardType.LEARNING) {
      return `
      <a href="#" class="dictionary-card-action__harden">
        <img src="../../../assets/images/dictionary/question.png" alt="В сложное">
        <span>В сложное</span>
      </a>
      <a href="#" class="dictionary-card-action__remove">
        <img src="../../../assets/images/dictionary/remove.png" alt="Удалить">
        <span>Удалить</span>
      </a>`;
    }

    if (this.type === CardType.DELETED) {
      return `
      <a href="#" class="dictionary-card-action__restore">
        <img src="../../../assets/images/dictionary/restore.png" alt="Восстановить">
        <span>Восстановить</span>
      </a>`;
    }

    if (this.type === CardType.HARD) {
      return `
      <a href="#" class="dictionary-card-action__learn">
        <img src="../../../assets/images/dictionary/question.png" alt="В изучаемое">
        <span>В изучаемое</span>
      </a>`;
    }

    return '';
  }
}

export default Card;
