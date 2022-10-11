import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Help from "./components/Help";
import Checkout from "./components/Checkout";
import BlogDetails from "./components/BlogDetails";
import Cart from "./components/C2";
import NotFound from "./components/NotFound";

import '@coreui/coreui/dist/css/coreui.min.css'


function App() {
      return (
          <Router>
              <div className="App">
                  <NavbarComponent/>
                  <div className="content">
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/contact" element={<Contact/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/signup" element={<SignUp/>}/>
                          <Route path="/help" element={<Help/>}/>
                          <Route path="/checkout" element={<Checkout/>}/>
                          <Route path="/products/:id" element={<BlogDetails/>}/>
                          <Route path="/c2" element={<Cart/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                  </div>
                  <Footer/>
              </div>
          </Router>
      );
}

export default App;