import React from 'react'
import Form from '../Form/Form'
import { Card } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'

function CoverImg() {
    return (
        <div className="w-100">
            {/* <div className="bg-white">
                <p>CAR WASHES<b> DELIVERED</b></p>
            </div> */}
            {/* <div className="d-flex form">
                <video type="video/mp4" src="/images/dark_cover.mp4" />
                <MyForm />
            </div> */}
            
            <Container fluid>
            <Row>
            <Col sm={8} className='d-flex justify-content-center'>
            <p className="mainHead">CAR WASHES<b> DELIVERED</b></p>
            </Col>
            <Col sm={4} className='d-flex'>
                <img src='images/call_icon.png' alt="" />
                <h1><b>ORDER A</b>WASHÉ</h1>
            </Col>
            </Row>
            <Row>
            <Col sm={8}>
            <Card>
                <div>
                    <video type="video/mp4" src="/images/dark_cover.mp4" />
                </div>
                <Card.ImgOverlay>
                    <Form />
                </Card.ImgOverlay>
            </Card>
                </Col>
            <Col sm={4} className='backGround'></Col>
            </Row>
            </Container>
        </div>
    )
}

export default CoverImg
