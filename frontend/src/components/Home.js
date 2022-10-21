import useFetch from "../useFetch";
import {useThemeHook} from '../Theme/Theme';
import {useEffect, useState} from 'react';
import Banner from '../cart/Banner';
import Loader from '../cart/Loader';
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';


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
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {loading ? (
                        <motion.div key='loader'>
                            <Loader setLoading={setLoading} />
                        </motion.div>
                    ) : (
                        <>
                            {/* <H2 /> */}
                            <Banner />
                            {!loading && (
                                <div className='transition-image final'>
                                    <motion.img
                                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                                        src="../logo192.png"
                                        layoutId='main-image-1'
                                    />
                                </div>
                            )}
                        </>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    );
}

export default Home;
