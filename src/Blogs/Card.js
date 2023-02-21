import './Blog.css';
  function BlogCard ({image,title,desc}){
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
                        <a href="./viewblog.html" className="btn">read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlogCard;