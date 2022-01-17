//  Polyfill
// import '../../node_modules/core-js/stable/';
// import '../../node_modules/regenerator-runtime/runtime.js';

// API stuff
import { API_URL, API_KEY } from './config.js';

// Helper function
import { getJSON } from './helpers.js';

export const state = { recipe: {} };

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}?key=${API_KEY}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
