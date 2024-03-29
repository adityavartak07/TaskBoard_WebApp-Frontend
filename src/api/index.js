import axios from "axios";

const API = axios.create({ baseURL: "https://task-board-web-app.vercel.app/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchTasks = (userID) => API.get(`/tasks/${userID}`);
export const createTask = (newtask) => API.post("/tasks", newtask);

export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
