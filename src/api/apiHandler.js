import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}





const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addBokBook(data) {
    return service
      .post("/book/your-masterpiece", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateBokbook(bokId, data) {
    return service
      .patch(`/book/change/${bokId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteBokBook(bokId) {
    return service
      .delete(`/book/${bokId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserBokBook(){
    return service
    .get("/my-account/creation")
    .then(res => res.data)
    .catch(errorHandler)
  }
};

export default apiHandler;
