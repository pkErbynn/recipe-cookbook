import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions"; //since imports many from Actions

const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoe", 32)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActionsUnion
) {
  // rx action only enforces a type
  switch (action.type) {
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

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.newIngredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;

      return { ...state, ingredients: updatedIngredients };

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingre, ingreIndex) => {
          return ingreIndex !== action.payload;
        }),
      };

    default:
      return state;
  }
}
