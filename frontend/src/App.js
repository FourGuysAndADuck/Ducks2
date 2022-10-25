import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Help from "./components/Help";

import NotFound from "./components/NotFound";

import UserPage from "./components/UserPage";
import '@coreui/coreui/dist/css/coreui.min.css'
import NewItems from './products/NewItems';
import Cart from './cart/Cart';
import Header from './header/Header';
import {useThemeHook} from './Theme/Theme';
import NewItemsDetails from './products/NewItemsDetails';





function App() {

    const [theme] = useThemeHook();


      return (


          <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>

          <Router>

              <div className="App">
                  <Header/>
                  <NavbarComponent/>
                  <div className="content">
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/contact" element={<Contact/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/signup" element={<SignUp/>}/>
                          <Route path="/userPage" element={<UserPage/>}/>
                          <Route path="/help" element={<Help/>}/>
                          {/* <Route path="/checkout" element={<Checkout/>}/> */}
                          {/* <Route path="/products" element={<C2/>}/> */}
                          {/* <Route path="/products/:id" element={<ProductDetails/>}/> */}
                          {/* <Route path="/c2" element={<Cart/>}/> */}
                          <Route path="*" element={<NotFound/>}/>
                          <Route path="/newitems" element={<NewItems/>}/>
                          <Route path="/cart" element={<Cart/>}/>
                          <Route path="/newitems/:id" element={<NewItemsDetails/>}/>
                      </Routes>
                  </div>
                  <Footer/>
              </div>
          </Router>
          </main>
      );
}

export default App;