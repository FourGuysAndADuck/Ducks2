import Container from "react-bootstrap/Container";
import {Col, Row} from "reactstrap";

const Checkout = () => {
    return(
        <Container id="container">
            <Row id="row1">
                <Col className="box">
                    <div>
                        Shopping list:
                    </div>
                </Col>
                <Col className="box">
                    <div>
                        Order information:
                    </div>
                    <div>
                        Total:
                    </div>
                    <div>
                        Tax:
                    </div>
                </Col>
            </Row>
            <Row>
                <Col id="interestBar">
                    <div>
                        You may also like ...
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Checkout;