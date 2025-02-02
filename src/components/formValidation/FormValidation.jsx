import React, { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

const FormValidation = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorusername, setErrorusername] = useState("");
    const [erroremail, setErrorEmail] = useState("");
    const [errorpassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setuserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    function validate(e){
        e.preventDefault();

        if(username.length > 8){
            setErrorusername("");
            setuserColor("green");
        }else{
            setErrorusername("Username must be 8 letters long.");
            setuserColor("red");
        }

        if(email.includes("@gmail.com")) {
            setErrorEmail("");
            setEmailColor("green");
        } else{
            setEmailColor("red")
            setErrorEmail("Email should have @gmail.com");
        }

        if (password.length > 8) {
            setErrorPassword(" ");
            setPasswordColor("green");
        } else {
            setErrorPassword("Password should be 8 letters long ");
            setPasswordColor("red");
        }

        if(password !== "" && password === confirmPassword) {
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        } else {
            setErrorConfirmPassword("Passwords didn't matched");
            setConfirmPasswordColor("red");
        }
    } 

  return (
    <>
    <Container className='my-5'>
        <Row>
           <Col>
                <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">FORM VALIDATION</h1>
           </Col>
        </Row>
    </Container>

    <Container className='my-5'>
        <Row>
            <Col xs={12} sm={12} md={12} lg={{span:6, offset:3}} xl={{span:6, offset:3}} xxl={{span:6, offset:3}}>
                <Card className='shadow'>
                    <Card.Header>
                    <Card.Title className='text-center text-primary'>Form Validation</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={username} onChange={(e)=> setusername(e.target.value)}
                                    style={{ borderColor: userColor }}/>
                                    <p className='text-danger'>{errorusername}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)} 
                                    style={{ borderColor: emailColor }}/>
                                <p className='text-danger'>{erroremail}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}
                                    style={{ borderColor: passwordColor }}/>
                                <p className='text-danger'>{errorpassword}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}
                                    style={{ borderColor: confirmPasswordColor }}/>
                                <p className='text-danger'>{errorConfirmPassword}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="submit" value="Submit" className="btn btn-outline-primary" onClick={validate}/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
    
  )
}

export default FormValidation