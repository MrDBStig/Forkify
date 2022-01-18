import View from './View.js';
import prewiewView from './previewView.js';

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet. Find a nice recipe and save it! ;)`;
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => prewiewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarkView();
