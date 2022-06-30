import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";
import { getTasks } from "../actions/tasks.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log("user data", data);
    dispatch({ type: AUTH, data });

    router.push("/done");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
