import View from './View.js';
import prewiewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again!`;
  _message = '';
  _generateMarkup() {
    return this._data.map(result => prewiewView.render(result, false)).join('');
  }
}

export default new ResultsView();
