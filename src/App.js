import React, { useState, useEffect } from 'react';
import './firebase/firebase';
import { database } from './firebase/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import FAQ from './components/FAQ';
import './App.css';
import ProtectedInfo from './components/ProtectedInfo';
import jrpBg from './images/jrpBg.webp';
import jrpLogo from './images/jrpLoreLogo.png';
import { Container, Row, Col } from 'react-bootstrap';


export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [invalidCode, setInvalidCode] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [secretData, setSecretData] = useState({});

  useEffect(() => {
    console.log("Mounted")
  },[]);
  
  const checkCode = (inputValue) => {
    database.ref().once('value')
      .then((snapshot) => {
        snapshot.forEach((childsnap) => {
          const val = childsnap.val()
          if (inputValue === val.code) {
            setAuthenticated(true);
            console.log(val)
            setSecretData({ ...val })
            setInputValue('');
          } else {
            setInvalidCode(true);
            setInputValue('');
            
          }
        })

      })
      .catch((e) => {
        console.log('Error fetching data', e);
      });
  }


  return (
    <Router>
      <div className="app-container">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            JRP Lore Revealer
                    </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Codes</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="http://www.journeyrp.com/">Back to JRP.com</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/" exact render={
            () => isAuthenticated ? <ProtectedInfo secretData={secretData} />
              : <Home
                inputValue={inputValue}
                invalidCode={invalidCode}
                setInputValue={setInputValue}
                setInvalidCode={setInvalidCode}
                checkCode={checkCode}
              />
          } />
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <div className="main">
          <Container>
            <Row>
              <Col xs={12}>
                <img className="logo" alt="JRP Logo" src={jrpLogo} />
              </Col>
            </Row>
          </Container>
          <div style={{
            backgroundColor: '#000000',
            position: 'absolute',
            top: 250,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '1320px',
            minHeight: 800,
            marginTop: '400px'
          }}>&nbsp;</div>

          <img alt="bg" src={jrpBg} width="100%" />


        </div>
      </div>
    </Router>
  );
}

