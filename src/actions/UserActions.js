import actionTypes from "../constants/ConstantsType";

export const addUser = (payload) => {
  return {
    type: actionTypes.ADD_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: actionTypes.DELETE_USER,
    payload,
  };
};

export const updateUser = (payload) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload,
  }
}

export const filterUser = (payload) => {
  return {
    type: actionTypes.FILTER_BY_NAME,
    payload
  }
}
