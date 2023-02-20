import { Route, Routes } from "react-router";
import About from "./About/About";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Contact from "./Contact/Contact";
import SignUp from "./Signup/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
