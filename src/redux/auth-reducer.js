import { userAPI } from "../api/api";
// import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const authMe = () => {
  return (dispatch) => {
    userAPI.authMe().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    // let action = stopSubmit("login", { _error: "Email is wrong" });
    // dispatch(action);
    // return;
    userAPI.login(email, password, rememberMe).then((response) => {
      if (response.resultCode === 0) {
        dispatch(authMe());
      } else {
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    userAPI.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
