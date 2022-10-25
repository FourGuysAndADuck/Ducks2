import useFetch from "../useFetch";
import {useThemeHook} from '../Theme/Theme';
import {useEffect, useState} from 'react';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import "../home.css"
import {Link} from 'react-router-dom';
import {motionValue} from 'framer-motion';


const Home = () =>  {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    const [theme] = useThemeHook();

    const {data: user} = useFetch("http://localhost:8080/api/users");

    //
    // for (let i = 0; i < user.length; i++) {
    //     console.log(user[i].username);
    // }

    return(
        <div  className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary'} >


    <main>
        <section className="image-part main-grid">
            <h1 className="title">Shopping made easy at a push of &nbsp;&nbsp;a button. <span className="bold">Duck'N'Stuff more stuff for your buck</span> that fits your&nbsp;&nbsp;&nbsp;&nbsp; budget.</h1>
            <p className="intro">Saving money for things that really matter.</p>
           <Link to="/contact">
            <motion.button
                whileHover={{
                    scale: 1.1,
                    textShadow:  "0px 0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    borderRadius: "20%"
                }}

            >Contact Us</motion.button>
           </Link>
        </section>

        <section className="info main-grid">
            <div className="about part1">
                <h2 className="headlines">About Us</h2>
                <p className="pstyle">We understand how big money is in this economy and add inflation thing can get expensive. So why spend more if you don't have to? Thus Duck'N'Stuff came into fruition. We plan to be the go to for all your needs instead of having to shop for the best prices, we took care of that for you with our competitive prices.<span className="black">awesome work.</span></p>
            </div>
            <div className="skills part1">
                <h2>Our Promise</h2>
                <p className="pstyle">We research prices so you don't have to do the heavy lifting and if you find one of our items lower somewhere else, we'll beat it and add a 5% discount to your order.</p>
            </div>
            <div className="touch part1">
                <h2>Get In Touch</h2>
                <p className="pstyle">Send us an email with any concern and we will get back to you <span className="black">immediately.</span></p>
            </div>

        </section>
    </main>


        </div>
    );
}

export default Home;
