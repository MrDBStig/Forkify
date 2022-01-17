//  Polyfill
// import '../../node_modules/core-js/stable/';
// import '../../node_modules/regenerator-runtime/runtime.js';

// API stuff
import { API_URL, API_KEY } from './config.js';

export const state = { recipe: {} };

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

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
