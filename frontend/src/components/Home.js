import useFetch from "../useFetch";
import {useThemeHook} from '../Theme/Theme';

const Home = () =>  {

    const [theme] = useThemeHook();

    const {data: user} = useFetch("http://localhost:8080/api/users");

    //
    // for (let i = 0; i < user.length; i++) {
    //     console.log(user[i].username);
    // }

    return(
        <div  className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary'} >
            <h1>Homepage</h1>
        </div>
    );
}

export default Home;
