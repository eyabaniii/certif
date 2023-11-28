import axios from "axios";
import {
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOG_OUT,
  REGISTER_USER,
} from "../ActionType/ActionType";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// REGISTER new user
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER }); // appel load

  try {
    let result = await axios.post(
      "http://localhost:8000/api/user/register",
      newUser
    );
    localStorage.setItem("token", result.data.token);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    toast.error("registration failed");
    dispatch({ type: FAIL_USER, payload: error });
  }
};
// login
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("http://localhost:8000/api/user/login", user);
    localStorage.setItem("token", result.data.token);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    toast.error("invalid credentials");
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT });
};
