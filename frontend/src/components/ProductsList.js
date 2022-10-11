import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function ProductsList ({Products, title, price}) {
    let x = 0
    for (let i = 0; i < Products.length; i++) {
        let z = Products[i].Price
        console.log(z)
        x += z



    }




    return (

        <div className="product-list">
            <h1 className="center-title">{title}</h1>
            {/*<h2>{x}</h2>*/}
            {Products.map((product) =>  (
                <div className= "product-preview" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <p className="pic"><img src="/logo512.png"  style={{
                            width:"100px"}}/></p>
                    <h2>{product.Name}</h2>
                    {/*<p>Product Price: ${product.Price}</p>*/}
                    </Link>
                </div>



            ))}

            {/*<Col className="box">*/}
            {/*    <div>*/}
            {/*        Order information:*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        /!*{console.log(sum +  "  is the  total")}*!/*/}
            {/*        Total:{"$"+x}*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        Tax:*/}
            {/*    </div>*/}
            {/*</Col>*/}

        </div>

    )
}

export default ProductsList





