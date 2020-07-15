import HttpService from './HttpService';

class WordService {
  static async getChunk(parameters) {
    let query = [];

    ['group', 'page', 'wordsPerExampleSentenceLTE', 'wordsPerPage'].forEach((key) => {
      if (parameters[key]) {
        query.push(`${key}=${encodeURIComponent(parameters[key])}`);
      }
    });

    query = query.length ? `?${query.join('&')}` : '';

    const response = await HttpService.fetch(
      `/words${query}`,
      { method: 'GET' },
    );

    return response.json();
  }

  static async getWordWithAssets(id) {
    const response = await HttpService.fetch(
      `/words/${id}`,
      {},
    );

    return response.json();
  }
}

export default WordService;
