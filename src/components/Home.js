import React, { useState  } from 'react';
import './Home.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Reaptcha from 'reaptcha';

const Home = ({ inputValue, invalidCode, setInputValue, checkCode }) => {
    const [verified, setVerified] = useState(false);

    const onVerify = (recaptchaResponse) => {
        setVerified(true);
        console.log(recaptchaResponse);        
    }

    return (
        <div className="container home-container">
            <div className="form-container">
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter your code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ex: 0x23sdesw390ndsfyl49"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Codes can be found by Scholars throughout the world of JourneyRP
                    </Form.Text>
                    </Form.Group>

                    <div className="error-container">
                        {' '}
                        {invalidCode && <small style={{ color: 'red' }}>Invalid Code!</small>}
                    </div>
                    <div className="recaptcha">
                    <Reaptcha 
                            sitekey="6LeEzcMZAAAAAF8x9EtM_sNLe1evEBO_86Oiqw0M" 
                            onVerify={onVerify} 
                           
                    />
                </div>
                    <div className="button-container">
                        <Button
                            variant="dark"
                            size="lg"
                            block
                            onClick={() => { checkCode(inputValue); }}
                            disabled={!verified}
                            type="submit"

                        >
                            Show me the Lore
                    </Button>
                    </div>
                </Form>
   
            </div>

        </div>
    )
}
export default Home;