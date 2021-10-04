import React from "react"
import './Contact.css'
import { Form, Button, Row, Col, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};
function ContactForm() {
  return (
    <div style={{ margin: "58px 0 40px", paddingBottom: "60px" }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
          <div>
            <img src="https://image.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg" alt="" />
          </div>
          <div><h2 className="text-center text-primary fw-bold fs-1 mb-3">Contact Us</h2>
            <p className="text-center ">
              You can easily reach us through filling up the form
            </p>
            <div>

              <Form>
                <Row>
                  <Col sm>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Your Name: </Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                  </Col>
                  <Col sm>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Your Email: </Form.Label>
                      <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Control
                  className="my-3"
                  type="text"
                  placeholder="Write Your Subject..."
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Messages:</Form.Label>
                  <Form.Control
                    placeholder="Write you message..."
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button className="mb-5" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div >
  );
}

export default Contact;
