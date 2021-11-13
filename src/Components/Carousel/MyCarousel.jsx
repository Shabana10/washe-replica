import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import MyButton from '../Button/MyButton'
import MyCarousel1 from './MyCarousel1'

function MyCarousel() {
    return (
        <>
            <Container fluid className='my-5 mb-5 bg-light'>
                <Row>
                    <Col sm={12} xs={12} className="text-center">
                        <h1>WHERE <b>WE WASHÉ</b></h1>
                        <h6>Find out if we’re washing near you!</h6>
                    </Col>
                </Row>
                <Row>
                    {/* <Col className="d-lg-block d-md-block d-none">
                        <Card style={{ height: '30rem', width: '18rem' }}>
                            <Card.Img src="images/slider.PNG" alt="Card image" style={{ height: '30rem', width: '18rem' }} />
                            <Card.ImgOverlay>
                                <button className="button p-2 border-0"><i className="fas fa-arrow-left fa-2x"></i></button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col> */}
                    <Col sm>
                    <MyCarousel1 />
                    </Col>
                    {/* {
                        slider1.map((item, index) => {
                            return <Col sm key={index}>
                                <Card style={{ width: '22rem', height: '30rem' }}>
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title><h1>{item.title}</h1></Card.Title>
                                        <Card.Text>
                                            {item.para}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    } */}
                </Row>
                <Row className='m-5'>
                    <Col sm={12} xs={12} className="text-center">
                        <MyButton btnText='DON’T SEE YOUR CITY?' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default MyCarousel
