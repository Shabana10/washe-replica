import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'


const MyCarousel1 = () => {
    let [count, setCounter] = useState(0)
    const slider = [
        [{
            img: 'images/slider1.jpg',
            title: 'ARIZONA',
            para: "You're next! Washe will be washing in the Scottsdale area by December 2010"
        },
        {
            img: 'images/slider2.jpg',
            title: 'GEORGIA',
            para: ''
        },
        {
            img: 'images/slider3.jpg',
            title: 'FLORIDA',
            para: 'The Washe App launched in South Florida in 2015 and has since washed over 40,000 cars.'
        }],
        [{
            img: 'images/slider2.jpg',
            title: 'GEORGIA',
            para: ''
        },
        {
            img: 'images/slider3.jpg',
            title: 'FLORIDA',
            para: 'The Washe App launched in South Florida in 2015 and has since washed over 40,000 cars.'
        },
        {
            img: 'images/slider4.jpg',
            title: 'NEW JERSEY',
            para: "Washe opened its North East office headquarters in September 2017. We'll be washing there soon, too!"
        }],
        [{
            img: 'images/slider3.jpg',
            title: 'FLORIDA',
            para: 'The Washe App launched in South Florida in 2015 and has since washed over 40,000 cars.'
        },
        {
            img: 'images/slider4.jpg',
            title: 'NEW JERSEY',
            para: "Washe opened its North East office headquarters in September 2017. We'll be washing there soon, too!"
        },
        {
            img: 'images/slider5.jpg',
            title: 'CALIFORNIA',
            para: "The Washe App has been live in Southern California since July 2017, Currently active in over 140 cities."
        }],
        [{
            img: 'images/slider4.jpg',
            title: 'NEW JERSEY',
            para: "Washe opened its North East office headquarters in September 2017. We'll be washing there soon, too!"
        },
        {
            img: 'images/slider5.jpg',
            title: 'CALIFORNIA',
            para: "The Washe App has been live in Southern California since July 2017, Currently active in over 140 cities."
        },
        {
            img: 'images/slider1.jpg',
            title: 'ARIZONA',
            para: "You're next! Washe will be washing in the Scottsdale area by December 2010"
        }],
        [{
            img: 'images/slider5.jpg',
            title: 'CALIFORNIA',
            para: "The Washe App has been live in Southern California since July 2017, Currently active in over 140 cities."
        },
        {
            img: 'images/slider1.jpg',
            title: 'ARIZONA',
            para: "You're next! Washe will be washing in the Scottsdale area by December 2010"
        },
        {
            img: 'images/slider2.jpg',
            title: 'GEORGIA',
            para: ''
        }
        ]
    ]
    const addCounter = () => {
        setCounter(count + 1)

    }
    const slider1 = [
        {
            img: 'images/slider1.jpg',
            title: 'ARIZONA',
            para: "You're next! Washe will be washing in the Scottsdale area by December 2010"
        },
        {
            img: 'images/slider2.jpg',
            title: 'GEORGIA',
            para: ''
        },
        {
            img: 'images/slider3.jpg',
            title: 'FLORIDA',
            para: 'The Washe App launched in South Florida in 2015 and has since washed over 40,000 cars.'
        },
        {
            img: 'images/slider4.jpg',
            title: 'NEW JERSEY',
            para: "Washe opened its North East office headquarters in September 2017. We'll be washing there soon, too!"
        },
        {
            img: 'images/slider5.jpg',
            title: 'CALIFORNIA',
            para: "The Washe App has been live in Southern California since July 2017, Currently active in over 140 cities."
        }
    ]
    return (
        <>
            <Container fluid className="d-lg-block d-md-block d-none">
                <Row>
                    <Col>
                        <Card style={{ height: '30rem', width: '18rem' }}>
                            <Card.Img src="images/slider.PNG" alt="Card image" style={{ height: '30rem', width: '18rem' }} />
                            <Card.ImgOverlay>
                                <button className="button p-2 border-0" onClick={addCounter}><i className="fas fa-arrow-left fa-2x"></i></button>
                            </Card.ImgOverlay>
                            {
                                count !== 5 ? count + 1
                                    : count = 0}
                        </Card>
                    </Col>
                    <Col>
                        <div style={{ height: '30rem', width: '22rem', border: '2px solid black' }}>
                            <img className='w-100 h-50' src={slider[count][0].img}
                                alt={slider[count][0].title} />
                            <div>
                                <h1>{slider[count][0].title}</h1>
                                <p>{slider[count][0].para}</p>
                            </div>
                            <footer className="footer text-secondary">
                                <h6 className='headingWatch'>WATCH CITY LIST</h6>
                            </footer>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ height: '30rem', width: '22rem', border: '2px solid black' }}>
                            <img className='w-100 h-50' src={slider[count][1].img}
                                alt={slider[count][1].title} />
                            <div>
                                <h1>{slider[count][1].title}</h1>
                                <p>{slider[count][1].para}</p>
                            </div>
                            <footer className="footer text-secondary">
                                <h6 className='headingWatch'>WATCH CITY LIST</h6>
                            </footer>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ height: '30rem', width: '22rem', border: '2px solid black' }}>
                            <img className='w-100 h-50' src={slider[count][2].img}
                                alt={slider[count][2].title} />
                            <div>
                                <h1>{slider[count][2].title}</h1>
                                <p>{slider[count][2].para}</p>
                            </div>
                            <footer className="footer text-secondary">
                                <h6 className='headingWatch'>WATCH CITY LIST</h6>
                            </footer>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Carousel  */}
            <Container fluid className="d-lg-none d-md-none d-block">
                <Row>
                    <Carousel>

                        {
                            slider1.map((item, index) => {
                                return <Carousel.Item key={index}>
                                    <Card style={{ width: '18rem', height: '25rem' }}>
                                        <Card.Img variant="top" src={item.img} alt="item.title" />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.para}
                                            </Card.Text>
                                            <p className='text-secondary'>WATCH CITY LIST</p>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>

                </Row>
            </Container>
        </>
    )
}

export default MyCarousel1
