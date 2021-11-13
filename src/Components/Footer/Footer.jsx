import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    const obj = [
        {
            a: 'Address: 101 Plaza Real S Suite 210, Boca Raton, FL 33432',
            b: 'Email:info@washe.io',
            c: 'Phone: +1 (844) 219 9202'
        },
        {
            a: 'Terms Of Use',
            b: 'Privacy Policy',
            c: '© Copyright - The Washe App'
        }
    ]
    return (
        <>
            <Container fluid className="Footer text-light p-5">
                <Row>
                <Col sm>
                    <img src="images/Footer.PNG" className="img-fluid" alt="Logo" />
                </Col>
                    {
                        obj.map((item, index) => {
                            return <Col sm key={index}>
                                <ul>
                                    <li>{item.a}</li>
                                    <li>{item.b}</li>
                                    <li>{item.c}</li>
                                </ul>
                            </Col>
                        })
                    }
                    <Col sm>
                    <i className="fab fa-twitter fa-2x border border-white border-3 m-2 p-3 rounded-circle"></i>
                    <i className="fab fa-facebook-f fa-2x border border-white border-3 m-2 p-3 px-4 rounded-circle"></i>
                    <i className="fab fa-instagram fa-2x border border-white border-3 m-2 p-3 rounded-circle"></i>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
