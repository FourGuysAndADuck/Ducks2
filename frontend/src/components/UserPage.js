import {GoogleLogout} from "react-google-login";
import {useState} from "react";

let UserPage = (props) => {
    const clientId = '836215362418-aek3ommbe5h4bb8ak7d63r7vrfo2hob8.apps.googleusercontent.com';

    const logOut = () => {
        setProfile(null);
    };

    const [profile, setProfile] = useState([]);

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <div>
                <img src={profile.imageUrl} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            </div>
        </div>
    );
}

export default UserPage;