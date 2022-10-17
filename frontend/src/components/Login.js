// import {useEffect, useState} from "react";
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import {gapi} from "gapi-script";
//
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const Login = () => {
    // const clientId = '836215362418-aek3ommbe5h4bb8ak7d63r7vrfo2hob8.apps.googleusercontent.com';
    //
    // const [ profile, setProfile ] = useState([]);
    //
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: ''
    //         });
    //     };
    //     gapi.load('client:auth2', initClient);
    // });
    //
    // const onSuccess = (res) => {
    //     setProfile(res.profileObj);
    // };
    //
    // const onFailure = (err) => {
    //     console.log('failed', err);
    // };
    //
    // return (
    //     <>
    //         <div id="loginForm">
    //             <Form>
    //                 <Form.Group className="mb-3" controlId="formBasicEmail">
    //                     <Form.Label>Email address</Form.Label>
    //                     <Form.Control type="email" placeholder="Enter email" />
    //                     <Form.Text className="text-muted">
    //                         We'll never share your email with anyone else.
    //                     </Form.Text>
    //                 </Form.Group>
    //
    //                 <Form.Group className="mb-3" controlId="formBasicPassword">
    //                     <Form.Label>Password</Form.Label>
    //                     <Form.Control type="password" placeholder="Password" />
    //                 </Form.Group>
    //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //                     <Form.Check type="checkbox" label="Check me out" />
    //                 </Form.Group>
    //                 <Button variant="primary" type="submit">
    //                     Submit
    //                 </Button>
    //             </Form>
    //         </div>
    //
    //         <div id="googleLoginBtn">
    //             <GoogleLogin
    //                 clientId={clientId}
    //                 buttonText="Sign in with Google"
    //                 onSuccess={onSuccess}
    //                 onFailure={onFailure}
    //                 cookiePolicy={'single_host_origin'}
    //                 isSignedIn={true}
    //             />
    //         </div>
    //     </>
    // );
}

export default Login;