import React from 'react';

const StripeChexkout = () => {
    return (
        <div className="sr-root">
            <div className="sr-main">
                <section className="container">

                    <form action="http://localhost:8080/api/payment/create-payment-intent" method="POST">
                        <button id="submit" role="link">Buy</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default StripeChexkout