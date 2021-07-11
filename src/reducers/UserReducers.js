import actionTypes from "../constants/ConstantsType";
import data from "../data";

const initialState = { data: data, sort: "" };

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          mail: action.payload.mail,
        },
      ];
    case actionTypes.DELETE_USER:
      const index = state.findIndex((x) => x.id === action.payload.id);
      const newState = [...state];
      if (index) {
        newState.splice(index, 1);
      }
      return newState;
    case actionTypes.UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.newName,
              mail: action.payload.newMail,
            }
          : user
      );
    case actionTypes.FILTER_BY_NAME:
      const sortBy = action.payload;
      const sortedList = state.data.slice();
      if (sortBy === "A-Z") {
        sortedList.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (sortBy === "Z-A") {
        sortedList.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
      return {
        ...state,
        sort: sortBy,
        data: sortedList,
      };
    default:
      return state;
  }
};

export default userReducers;
