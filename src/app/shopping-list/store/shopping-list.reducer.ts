import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions"; //since imports many from Actions

const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoe", 32)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActionsUnion
) {
  switch (
    action.type // rx action only enforces a type
  ) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        // returns an object
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredient: [...state.ingredients, ...action.payload], // spread operator(...) used cus adds ingredient[]
      };
    default:
      return state;
  }
}
