import axios from "axios";
import Swal from "sweetalert2";

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
    if(response.data.status === "success"){
      Swal.fire(
        'Good job!',
        'Successfully Created an Account!',
        'success'
    )
    setTimeout(()=>{
      //window.location.reload();
      },5000)
    }
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
        if(response.data.status === "success"){
          Swal.fire(
            'Good job!',
            'Successfully Logged in!',
            'success'
        )
        setTimeout(()=>{
          window.location.reload();
          },5000)
        }
    });
};
const AuthService = {
  register,
  login,
}

export default AuthService;