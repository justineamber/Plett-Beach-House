import React from "react"
import newsletterStyles from "./newsletter.module.css"
import Form from "react-bootstrap/Form"
import { Col, Container, Button } from "react-bootstrap"
import { GiSeahorse } from "react-icons/gi"

export default function NewsletterForm() {
  return (
    <Container>
      <Form className={newsletterStyles.paddingTop}>
        <GiSeahorse />
        <h2 className={newsletterStyles.headingStyle}>
          Signup for our newsletter
        </h2>

        <Form.Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Group controlId="formBasicName">
              <Form.Label for="inlineFormInput" srOnly>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="First Name"
              />
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label for="inlineFormInput" srOnly>
                Email Address
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Email Address"
              />
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Button
              variant="dark"
              type="submit"
              bsPrefix={newsletterStyles.Btn}
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}
