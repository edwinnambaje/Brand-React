import './Blog.css';
import { useEffect } from 'react';
import image from '../images/background.jpg'
import axios from 'axios';
async function GetAll(){
    try {
      const res = await axios.get("https://brand-acqz.onrender.com/api/posts/all");
      console.log(res.data)
    } catch (error) {
        console.log(error)
    }
  }
  
  function Blogs(){
    useEffect(() => {
        GetAll();
    }, []);
    return (
        <section className="blog">
        <div className="containerc">
            <h1 className="heading">BLOGS</h1>
    
            <div className="box-container">
                <div className="box shadow">
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h3>Why Lead Generation is Key for Business Growth</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <a href="./viewblog.html" className="btn">read more</a>
                    </div>
                </div>
                <div className="box shadow">
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h3>Why Lead Generation is Key for Business Growth</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                        <a href="./viewblog.html" className="btn">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Blogs;