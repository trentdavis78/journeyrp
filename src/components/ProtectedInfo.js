import React from 'react';
import './Page.css';
import { Container, Row, Col } from 'react-bootstrap';

const ProtectedInfo = ({ secretData }) => {
    let imgUrl;
    if(secretData.imgUrl === '') {
        imgUrl = "https://www.tibs.org.tw/images/default.jpg";
    } else {
        imgUrl = secretData.imgUrl;
    }
    console.log(secretData);
    return (
        <div className="container protected-container">
            <Container>
                <Row>
                    <Col className="protected-content" xs={12} lg={6}>
                        <h2>{secretData.title}</h2>
                        {secretData.description}
                    </Col>
                    <Col xs={12} lg={6}>
                        <img
                            src={imgUrl}
                            alt={secretData.title}
                            className="loreImage"
                        />
                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default ProtectedInfo;