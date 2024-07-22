import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/Images/ilumeo_logo.jpg";
import './initialPage.styles.css';

const InitialPage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/main')
  }
  return(
    <div className="login_container">
      <div className="login">
          {/* <div className="blob-section" /> */}
          <Form>
            <img className="logo" src={logo} alt="Logo Ilumeo" />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Digite seu código de funcionário</Form.Label>
              <Form.Control type="text" placeholder="Ex: 85745" />
              <Button type="submit" className="button" onClick={goToMainPage}>
                Submit
              </Button>
            </Form.Group>
          </Form>
      </div>
    </div>
  )
}

export default InitialPage;
