import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
    return (
        <div className="login-bg">
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card className="card-login" style={{ width: "18rem" }}>
                            <Card.Body>
                                <Outlet />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default Layout;
