import { useReducer } from "react";

const ADD_FOOD = "ADD_FOOD";
const REMOVE_FOOD = "REMOVE_FOOD";

function orderReducer(state, action) {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.food],
      };
    case REMOVE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food) => food.id !== action.id),
      };
    default:
      return state;
  }
}

export default function useOrderReducer() {
  const [state, dispatch] = useReducer(orderReducer, {
    foods: [],
    food: null,
    total: 0,
  });

  return [state, dispatch];
}
