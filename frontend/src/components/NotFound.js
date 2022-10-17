import "../angry-duck.css"
import {Link} from 'react-router-dom';

const NotFound = () => {

    return(
        <div className="angry-duck" style={{
            textAlign: "center",
            fontSize: "larger",
            fontWeight: "bolder"


        }}>    <Link to="/newitems"> Get The Duck 0utta Here!</Link>

        <img src="/duck.gif" style={{
            width: "100%"

        }} />
        </div>
        // <h1>404 Not found</h1>
    );
}

export default NotFound;