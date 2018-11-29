import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.toen });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "email in use" });
  }
};
