import {useEffect, useRef, useState} from "react";
import ProductsList from "./ProductsList";

const Cart = () => {

    const [amount, setAmount]  = useState(0)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState("");

    let sum = 0
    const [Products, setProduct] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();

        fetch("http://localhost:8000/Products",{signal: abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("Something is wrong")
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setProduct(data)
                setIsPending(false);
                setError(null);
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i].Price)
                    sum += data[i].Price
                    // console.log(sum)
                }
                console.log(sum + " after loop")
                return sum;
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    setError(err.message)
                    setIsPending(false);
                }
            })


        return () => abortCont.abort();
    }, []);//only renders for these dependencies


    {Products && <ProductsList Products={Products} title="All products" />}
        // for (let i = 0; i < Products.length; i++) {
        //     console.log(Products[i].Price)
        //     sum += Products[i].Price
        //     console.log(sum)
        // }

// console.log(Products)

    return(
        <div id="container">
            {Products && <ProductsList Products={Products} title="Products" price={Products[0].Price} />}
        </div>
    );
}

export default Cart;