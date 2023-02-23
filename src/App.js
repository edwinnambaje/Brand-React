import { Route, Routes } from "react-router";
import About from "./About/About";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Contact";
import SignUp from "./Signup/Signup";
import Blogs from "./Blogs/Blog";
import Single from "./Single/Single";
import Login from "./Signup/Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import User from "./User/User";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/blogs/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
export default App;
