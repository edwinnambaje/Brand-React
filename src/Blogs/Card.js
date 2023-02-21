import './Blog.css';
import { Link } from 'react-router-dom';
  function BlogCard ({image,title,desc,id}){
    return (
        <div className="containerc">
            <div className="box-container">
                <div className="box shadow">
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <Link to={`/blogs/${id}`} className="btn">read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogCard;