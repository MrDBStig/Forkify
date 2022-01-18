// Views
import recipeView from './views/recipeView.js';

// Model
import * as model from './model.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // const id = '5ed6604591c37cdc054bc886';

    if (!id) return;

    // Rendering spinner while loading recipe
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('bread');
  } catch (err) {
    // console.error(err);
    recipeView.renderError();
  }
};

controlSearchResults();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
