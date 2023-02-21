import './Blog.css';
import { useEffect ,useState} from 'react';
import BlogCard from './Card';
import axios from 'axios';
function Blogs(){
    const [blog ,setBlog] =useState([])
async function GetAll(){
    
    try {
      const res = await axios.get("https://brand-acqz.onrender.com/api/posts/all");
      console.log(res.data)
      setBlog(res.data)

    } catch (error) {
        console.log(error)
    }
  }
    useEffect(() => {
        GetAll();
    }, []);
    return (
       <section className="blog">
         <h1 className="heading">BLOGS</h1>
        {blog.map((item)=>{
            return(
                <BlogCard
                image={item.image}
                title={item.title}
                desc={item.desc}/>
            )
        })}
       </section>
    );
}
export default Blogs;