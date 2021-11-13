import React from 'react'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import MyButton from '../Button/MyButton'

function MyCard() {
    let cardText = [
        {
            img: 'images/card1.PNG',
            title: 'Be your own boss',
            text: 'Operate your own business through Washé. You decide where, when and how much you work.'
        },
        {
            img: 'images/card2.PNG',
            title: 'Choose your own hours',
            text: 'We’ll only send you job requests when you’re “online.” Your schedule is your call.'
        },
        {
            img: 'images/card3.PNG',
            title: 'Get paid fast',
            text: 'All payments are automatically submitted through the app, and deposited into your bank account. (Tips too!)'
        },
        {
            img: 'images/card4.PNG',
            title: 'Earn $1,000+ per week*',
            text: 'Washé receives a car wash request approximately every 5 minutes. If you want to work, there will be work!'
        }
    ]
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} xs={10} className="d-flex justify-content-center m-5">
                        <h1><b>BECOME A </b>WASHÉR</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        cardText.map((item, index) => {
                            return <Col sm key={index}>
                                <Card style={{ width: '18rem', border: 0 }}>
                                    <Card.Img variant="top" src={item.img} style={{ width: '12rem', height: '12rem' }} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }

                </Row>
                <Row>
                    <Col sm={12} xs={10} className="d-flex justify-content-center m-5">
                        <MyButton btnText='JOIN THE NETWORK' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyCard
