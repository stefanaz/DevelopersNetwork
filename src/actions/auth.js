import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load User:
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  //   console.log("load user 2");

  try {
    const res = await axios.get("api/auth");
    console.log("res", res);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

/// to register user:
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users/", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(e => dispatch(setAlert(e.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
