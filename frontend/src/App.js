import {Component} from "react";
import NavbarComponent from "./components/Navbar"

class App extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {

   let body = await fetch("http://localhost:8080/clients/",{
      headers:{
        "accepts":"application/json",
          "Access-Control-Allow-Origin": "*"
  }
    })
        .then(res => {
          console.log(res);
          return res.json();
        })


    this.setState({clients: body});
    console.log(this.state)
  }

  render() {
    const {clients} = this.state;

      return (
          <>
          <div className="App">
              <NavbarComponent/>
          </div>
          </>
      );
  }
}

export default App;