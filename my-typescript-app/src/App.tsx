import React, {useRef, useContext } from "react";
import { Button, Container, Form, Navbar, Row } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup";

function App() {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      console.log("Compte créé")
    } catch (error) {
      console.error(error);
    }
  };
  
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      console.log("Connecté")
    } catch (error) {
      console.error(error);
    }
  };
  
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Firebase Authentication</Navbar.Brand>
      </Navbar>
      {!user ? (
      <Container style={{ maxWidth: "500px" }} fluid>
        <Form className="mt-4">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label className="mt-4">Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="password" />
          </Form.Group>
          <Row className="mt-4">
              <Button onClick={createAccount} className="col-5" type="button">
                Inscription
              </Button>
              <p className="col-2"/>
              <Button onClick={signIn} className="col-5" type="button" variant="secondary">
                Connexion
              </Button>
          </Row>
        </Form>
      </Container>
      ) : (
        <div>
          <h2 className="mt-4 text-center">Welcome {user.email}</h2>
          <Button onClick={signOut} type="button">
            Déconnexion
          </Button>
        </div>
      )}
    </>
  );
}

export default App;