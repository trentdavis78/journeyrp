import React, { useState } from 'react';
import './Home.css';
import { Form } from 'react-bootstrap';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Home = ({ inputValue, invalidCode, setInputValue, setInvalidCode, checkCode }) => {
    const [invalidCodeCount, setInvalidCodeCount] = useState(0);
    console.log(invalidCode)
    // const getIP = async () => {
    //     const response = await fetch('http://api.ipify.org/?format=json');
    //     const data = await response.json();
    //     return data;
    // }
    // getIP().then(data => console.log(data));
    const errorMsgArray = [
                            'Invalid Code!',
                            'Stop Guessing!!',
                            'Last warning, you are about to get banned!!!'
                            ]
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
                        // onFocus={() => setInvalidCode(false)}
                    />
                    <Form.Text className="text-muted">
                    Codes can be found by Scholars throughout the world of JourneyRP
                    </Form.Text>
                </Form.Group>
                
                <div className="error-container">
                    {' '}
                    {invalidCode && <small style={{color:'red'}}>{errorMsgArray[invalidCodeCount]}</small>}
                </div>
                <div className="button-container">
                    <Button 
                        variant="dark" 
                        size="lg" 
                        block
                        onClick={() => { checkCode(inputValue); }}
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