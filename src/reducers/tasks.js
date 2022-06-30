import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

export default (state = { isLoading: true, tasks: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        tasks: action.payload.data
      };
    case CREATE:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload)
      };
    default:
      return state;
  }
};
