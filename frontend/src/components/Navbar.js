import {Link, Route, Switch} from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                   <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Switch>
        </>
    );
}

export default Navbar;
