import axios from "axios";

const API_URLs = "https://brand-acqz.onrender.com/api/auth/login";
const API_URL = "https://brand-acqz.onrender.com/api/auth/register";

const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  })
  .then((response) => {
    console.log(response.data)
});
};

const login = (email, password) => {
  return axios
    .post(API_URLs, {
      email,
      password,
    })
    .then((response) => {
        console.log(response.data)
    });
};
const AuthService = {
  register,
  login,
}

export default AuthService;