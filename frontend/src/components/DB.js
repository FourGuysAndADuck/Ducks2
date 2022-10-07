import {Component} from "react";

class DB extends Component {
    state = {
        users: []
    };

    async componentDidMount() {

        let body = await fetch("http://localhost:8080/users/",{
            headers:{
                "accepts":"application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => {
                console.log(res);
                return res.json();
            })


        this.setState({users: body});
        console.log(this.state)
    }
}

export default DB;