import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
  DELETE
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getTasks = (userID) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTasks(userID);
    console.log("received tasks are", data);
    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createTask(task);
    console.log("received data", data);

    return dispatch({ type: CREATE, payload: data });

    // history.push(`/tasks/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
