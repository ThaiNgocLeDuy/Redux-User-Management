import { createStore } from "redux";
import rootReducer from "./reducers";
import data from "./data";

const setLocalStorage = (state) => {
  try {
    const persistantState = JSON.stringify(state);
    localStorage.setItem("persistantState", persistantState);
  } catch (e) {
    console.log(e);
  }
};

const getLocalStorage = () => {
  try {
    const persistantState = localStorage.getItem("persistantState");
    if (persistantState === null) return data;
    return JSON.parse(persistantState);
  } catch (e) {
    console.log(e);
  }
};

const store = createStore(rootReducer, getLocalStorage());

store.subscribe(() => setLocalStorage(store.getState()));

export default store;
