import { Link } from "react-router-dom";
import './navigation.css'
function Navigation(props) {
  return (
    <header className="header">
    <div className="logo"><span>ED</span>WIN</div>
    <nav>
        <ul>
            <li>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/register'>SIGNUP</Link>
            </li>
        </ul>
    </nav>
</header>

  );
}
export default Navigation;
