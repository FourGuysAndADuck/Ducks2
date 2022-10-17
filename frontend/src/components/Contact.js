import {useThemeHook} from '../Theme/Theme';

const Contact = () => {

    const [theme] = useThemeHook();

    return(
        <div className={theme? 'text-light my-5': 'text-black my-5'}>
            <h2>Contact</h2>
        </div>
    );
}

export default Contact;