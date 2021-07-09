import actionTypes from "../constants/ConstantsType";

const initialState = [
  {
    id: 1,
    name: "Le Duy",
    mail: "thaingocleduy@gmail.com",
  },
];

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
    default:
      return state;
  }
};

export default userReducers;
