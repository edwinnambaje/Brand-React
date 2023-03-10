import axios from "axios";
import Swal from "sweetalert2";
const API_URLs = "https://brand-acqz.onrender.com/api/auth/login";
const API_URL = "https://brand-acqz.onrender.com/api/auth/register";
const API = "https://brand-acqz.onrender.com/api/messages/create";

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
      window.location.replace('/login')
      },5000)
    }
});
};

const contact = (username, email, message) => {
  return axios.post(API, {
    username,
    email,
    message,
  })
  .then((response) => {
    console.log(response.status)
    if(response.status === 200){
      Swal.fire(
        'Good job!',
        'Successfully Sent the Message!',
        'success'
    )
    setTimeout(()=>{
      window.location.reload()
      },4000)
    }
    else{
      Swal.fire(
        'Error!',
        'Not Successfully Sent!',
        'error'
      )
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
      console.log(response.data.data)
        if(response.data.status === "success"){
          if(response.data.data.role === "admin"){
          Swal.fire(
            'Good job!',
            'Successfully Logged in As Admin!',
            'success'
        )
        setTimeout(()=>{
          window.location.replace('/dashboard')
          },5000)
        }
        else{
          Swal.fire(
            'Good job!',
            'Successfully Logged in as User!',
            'success'
        )
        setTimeout(()=>{
          window.location.replace('/user')
          },5000)
        }
      }
    });
};
const AuthService = {
  register,
  login,
  contact
}

export default AuthService;