import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoe", 32)],
};
export function shoppingListReducer(state = initialState, action) {}
