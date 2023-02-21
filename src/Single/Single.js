import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
function Single(){
    const {id}=useParams();
    const [singleBlog,setSingleBlog]=useState({})
    async function GetSingle(){
        try {
          const res = await axios.get(`https://brand-acqz.onrender.com/api/posts/${id}`);
          console.log(res.data)
        setSingleBlog(res.data)
    
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        GetSingle();
    },[])
    console.log(singleBlog)
    return (
        <div className="blog">
                <h1 className="heading">BLOG</h1>
            <div className=" view">
                <div className="box-container shadow">
                    <div className="image">
                        <img src={singleBlog?.image} alt=""/>
                    </div>              
                    <div className="content">
                      <h3 >{singleBlog?.title}</h3>
                      <p>{singleBlog?.desc}</p>
                    </div>
                </div>
          
            <div>
              <button  id="like-btn" className="btns"> </button><small className="count btns" id="likes" >0</small> 
              <button id="commen-tbtn" className="btns"> </button><small className="count btns" id="comments">0</small>
            <div className="">
                <form id="comment-form">
                  <div className="form_info center_display">
                      <input type="text" name="user" id="user" placeholder="Your user name"/>
                  </div>
                  <div className="name_error"></div>
                  <div className="form_info center_display">
                     <input type="text" name="comment" id="comment" placeholder="Add a short comment here"/>
                  </div>    
                  <div className="comment_error"></div>
                  <button type="submit" className="c-btn">Submit</button>
                </form>
            </div>
            <h2>Comments</h2>
            <hr/>
            <div className="comments">
            </div>
         </div>
         </div>
         </div>
     );
}
export default Single;