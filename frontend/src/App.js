import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer";
import '@coreui/coreui/dist/css/coreui.min.css'

function App(props) {
    // const {clients} = this.state;

      return (
          <>
          <div className="App">
              <NavbarComponent/>
              <Footer/>
          </div>
          </>
      );
}

export default App;