import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'
import { useState } from "react";
import { Container } from "@mui/material";


export default function Form2() {
  const [firstName, setFirstName] = useState('')
  const [LastName, setLastName] =useState('')
	const [email, setEmail] = useState('')
	const [age,setAge] = useState('')
  const [password,setPassword]= useState('')

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container style={{ display: "block", width: 800, padding: 30 }}>
    <div className="border d-flex  justify-content-center m-4 rounded">
    <Form  noValidate validated={validated} onSubmit={handleSubmit}
    >
      
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={e =>setFirstName(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={e =>setLastName(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="abc@gmail.com"
            onChange={e =>setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={e =>setPassword(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      
      <Button className="m-4" type="submit">Submit form</Button>
      <div style={{ backgroundColor: '#ffc107', margin: '2%'  }}>
      <div style={{  marginTop: '3%' }}>First Name: {firstName}</div>
      <div style={{  marginTop: '2%' }}>Last Name: {LastName}</div>
      <div style={{  marginTop: '2%' }}>Email:     {email}</div>
      <div style={{marginTop:'2%'}}>Password: 	        {password}</div>
      </div>
    </Form>
    </div>
    </Container>
  );
}

