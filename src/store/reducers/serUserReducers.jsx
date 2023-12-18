// reducer.js
const initialState = {
  style_tokyo_id: "",
  userSalonId: "",
  store_name: "",
  store_address: "",
  Id: "",
  // other state variables...
};

const setUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STYLE_TOKYO_ID":
      return {
        ...state,
        style_tokyo_id: action.payload,
      };
    case "SET_USER_SALON_ID":
      return {
        ...state,
        userSalonId: action.payload,
      };
    case "SET_ID":
      return {
        ...state,
        Id: action.payload,
      };
    case "SET_STORE_NAME":
      return {
        ...state,
        store_name: action.payload,
      };
    case "SET_STORE_ADDRESS":
      return {
        ...state,
        store_address: action.payload,
      };
    // other cases...
    default:
      return state;
  }
};

export default setUserReducers;
