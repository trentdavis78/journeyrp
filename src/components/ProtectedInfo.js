import React from 'react';
import './Page.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProtectedInfo = (props) => {
    console.log(props.secretData.code)
    return (
        <div className="container protected-container">
        <Container>

                <Row>
                    <Col xs={12} lg={6}>
                        {props.secretData.code !== "69" ?
                            <img alt={props.secretData.code} src={props.secretData.imgSrc} />
                            : <iframe title="rickroll"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1`}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>}
                    </Col>
                    <Col className="protected-content" xs={12} lg={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam odio, viverra a blandit eget, sodales ut arcu. Proin tempus elit et facilisis ullamcorper. Pellentesque at nisi ut odio placerat euismod nec in metus. Maecenas vulputate, erat id ornare mattis, erat augue porttitor ipsum, sed maximus arcu nisi condimentum velit. Vestibulum varius lectus ut mi aliquam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris consequat suscipit dui non auctor. Quisque rhoncus, libero et convallis hendrerit, nisi leo porttitor felis, vel pharetra tellus augue a ante. Nullam eu mi ut arcu vehicula cursus. Nullam hendrerit sapien id tortor aliquet, ut lacinia neque ultrices. Nam eu porttitor felis.</p>
                    </Col>
                </Row>
            
        </Container>
        </div>

    )
}

export default ProtectedInfo;