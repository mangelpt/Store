import { useContext, createContext } from "react";
import useOrderReducer from "../reducers/useOrderReducer";

const OrderContext = createContext({
  foods: [],
  food: null,
  total: 0,
  addFood: () => {},
  removeFood: () => {},
});

export function useOrderContext() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }
  return context;
}

export default function OrderProvider({ children }) {
  const [order, dispatch] = useOrderReducer();

  function addFood(food) {
    dispatch({ type: "ADD_FOOD", food });
  }

  function removeFood(id) {
    dispatch({ type: "REMOVE_FOOD", id });
  }

  const value = {
    ...order,
    addFood,
    removeFood,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}