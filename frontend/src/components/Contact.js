import {useThemeHook} from '../Theme/Theme';
import "../contact.css"

const Contact = () => {

    const [theme] = useThemeHook();

    return(
        <div className={theme? 'text-light my-5': 'text-black my-5'}>

            <div className="container">
                <h1>Contact Us</h1>

                    <h2>Have any questions? We'd love to hear from you</h2>
                    <div className="contact-items">
                        <div className="customer-care">
                            <h3>Customer Care</h3>
                            <p>Our Support team is spread all over the world to give you fast response</p>
                            <button id="cust-care" style={{
                                color: "white"
                            }}> Submit a Request</button>
                        </div>
                        <div className="write-us">
                            <h3>Write Us</h3>
                            <p> You can write us if you have any queries</p>
                            <a href="#">
                               duckyCorps@quackNation.com
                            </a>
                        </div>
                        <div className="sales-market">
                            <h3> Sales and Marketing</h3>
                            <p>Get in touch with our sales and marketing team</p>
                            <button id="sales" style={{
                                color: "white"
                            }}>Contact Sales</button>

                        </div>
                    </div>
            </div>

        </div>
    );
}

export default Contact;