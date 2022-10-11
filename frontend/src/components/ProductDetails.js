import {useParams} from "react-router-dom";
import LoremIpsum from "react-lorem-ipsum";
import useFetch from "../useFetch";

const BlogDetails = ({array}) => {
    const {id} = useParams()
    const {data, error, isPending} = useFetch("http://localhost:8000/Products/"+ id);

    const deleteQuote = () => {

        fetch("http://localhost:8000/Products/" + data.id, {
            method: "DELETE"

        }).then(() => {


        })

    }
    let cart = [];

    const addToCart = (event) => {
        event.preventDefault()
        fetch("http://localhost:8000/Products/" + data.id, {
            method: "GET"


        }).then(() => {
            let sum = 0
            let m = {
                Name: data.Name,
                Quantity: data.Quantity -=1,
                Price: data.Price,
                Category: data.Category,
                id: data.id,
                Pic: data.Pic

            }
            if (data.Quantity >= 0) {

                fetch("http://localhost:8000/Products/" + data.id, {
                    method: "PATCH",
                    headers:
                        {'Content-Type': 'application/json'},
                    body:JSON.stringify(m)


                }).then(() => {
                    // m -= 1
                    console.log("removed")
                })



                // m -= 1
                cart.push(data)
                console.log(cart)
            } else if (data.Quantity <= 0) {
                alert("Out of stock")
            }
            // cart.push(data)
            //  console.log(cart)
            //  console.log(data.Quantity)

            for (let i = 0; i < cart.length; i++) {
                sum+= cart[i].Price
                console.log(sum)


            }


        })


    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>{array}
                    <div className="div-container">
                        <div className="div-style"><img src="/logo512.png" style={{
                            float:"left",
                            padding: "20px"
                        }}/></div>
                        <div className="div-style"></div>
                        <div className="div-style"></div>
                        <div className="div-style" style={{
                            margin: "20px",
                            padding: "20px",
                            fontFamily:"fantasy",
                            fontSize:"40",
                            fontWeight: "bolder"

                        }}>{data.Name}</div>
                        <div className="div-style">${data.Price}</div>
                        <div className="div-style">{data.poster}</div>
                        <div className="div-style"></div>
                        <div className="div-style" style={{
                            clear:"right"
                        }}><LoremIpsum/></div>
                        <div className="div-style"></div>
                        <div className="div-style"></div>
                        <div className="div-style"></div>
                        <div className="div-style"></div>
                        <div className="div-style"></div>
                    </div>

                    <button onClick={addToCart} style={{
                        margin: "150px",
                        color: "aqua",
                        borderRadius: "50px",
                        backgroundColor: "black"
                    }}>Add to Cart</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails
