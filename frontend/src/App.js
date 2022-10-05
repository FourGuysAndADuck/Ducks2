import logo from './logo.svg';
import './App.css';
import {Component} from "react";

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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {clients.map(client =>
                  <div key={client.id}>
                    {client.name} ({client.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;