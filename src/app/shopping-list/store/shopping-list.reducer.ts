import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions"; //since imports many from Actions

const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoe", 32)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
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
  }
}
