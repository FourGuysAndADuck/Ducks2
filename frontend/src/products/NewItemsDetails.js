import {useParams} from 'react-router-dom';
import useFetch from '../useFetch';
import LoremIpsum from 'react-lorem-ipsum';
import {useThemeHook} from '../Theme/Theme';

const NewItemsDetails = () => {

    const [theme] = useThemeHook();

    const {id} = useParams()
    const {data, error, isPending} = useFetch("http://localhost:8000/Products/"+ id);

    return (

        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <div className="div-container">
                        <div className="div-style"><img src={data.image} style={{
                            float:"left",
                            padding: "20px",
                            width: "30%"
                        }}/></div>
                        <div className="div-style" style={{
                            margin: "20px",
                            padding: "20px",
                            fontFamily:"sans-serif",
                            fontSize:"40",
                            fontWeight: "bolder"



                        }}>{data.Name}</div>
                        <div className="div-style">${data.price}</div>
                        {/* <div className="div-style"><img src={data.image}/></div> */}
                        <div className="div-style" style={{
                            clear:"right"
                        }}><LoremIpsum /></div>
                    </div>


                </article>
            )}

        </div>


    )
}

export default NewItemsDetails