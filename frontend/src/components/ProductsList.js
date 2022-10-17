import {Link} from "react-router-dom";
import {useCart} from "react-use-cart";
import useFetch from "../useFetch";

function ProductsList ({Products, title, price}) {


    const {addItem } = useCart();
    const {data, isPending, error} = useFetch("http://localhost:8000/Products")
    console.log(Products)
    for (let i = 0; i < Products.length; i++) {
        let m = Products[i]


    }

    let products = [
        {
            name:"jacket",
            price:20,
            id:1,
            Quantity:3
        },
        {
            name:"shirt",
            price:5,
            id:2,
            Quantity: 2
        }
    ]

    return (

        <div className="product-list">
            {Products.map((product) =>  (
                <div className= "product-preview" key={product.id}>
                    <h1 className="center-title">{title}</h1>
                    <Link to={`/products/${product.id}`}>
                    <p className="pic"><img src="/logo512.png"  style={{width:"100px"}}/></p>
                    <h2>{product.Name}</h2>
                    <p>Product Price: ${product.price}</p>
                    </Link>
                </div>
            ))}
        </div>






)
}

export default ProductsList





