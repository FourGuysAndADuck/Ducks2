import {CFooter, CLink} from "@coreui/react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";

const Footer =  () => {
    return(
        <>
        <CFooter>
            <div>
                <CLink to="https://www.google.com">Google</CLink>
                <span>&copy; 2022 DuckyProductions</span>
            </div>
            <div>
                <span>Powered by</span>
                <CLink to="/home"> 4Guys&aDuck</CLink>
            </div>
        </CFooter>
        <Routes>
            <Route path="/home"/>
        </Routes>
        </>
    );
}

export default Footer;