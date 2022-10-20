import {CFooter, CLink} from "@coreui/react";
import {Link} from "react-router-dom";
import "../footer.css"

const Footer =  () => {
    return(
        <>
        <CFooter>
            <div className="footer">
                <CLink to="https://www.google.com">Google</CLink>
                <span>&copy; 2022 DuckyProductions</span>
            </div>
            <div>
                <span>Powered by</span>
                <CLink to="/"> 4Guys&aDuck</CLink>
            </div>
        </CFooter>
        </>
    );
}

export default Footer;