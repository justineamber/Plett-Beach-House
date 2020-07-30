import React from "react"
import {
  Container,
  Form,
  Button,
  Dropdown,
  Col,
  InputGroup,
} from "react-bootstrap"
import DateRangePicker from "../date-range-picker/date-range-picker"
import bookingFormStyles from "./booking-form.module.css"

const BookingForm = () => {
  return (
    <Container>
      <Form bsPrefix={bookingFormStyles.formStyles}>
        <Form.Row bsPrefix={bookingFormStyles.formRowStyles}>
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Book Accomodation
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Book Accomodation
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Book Activity</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Request Quote</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Modify or cancel booking
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cancel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs="auto">
            <Form.Group>
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Calendar
              </Form.Label>
              <InputGroup bsPrefix={bookingFormStyles.inputGroupStyles}>
                <div>
                  <DateRangePicker />
                </div>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Form.Group>
              <Form.Label htmlFor="inlineFormInput" srOnly>
                Promo Code
              </Form.Label>
              <Form.Control
                id="inlineFormInput"
                placeholder="Promo Code"
                className="mb-2"
              />
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Button
              type="submit"
              className="mb-2"
              bsPrefix={bookingFormStyles.searchButtonStyles}
            >
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}

export default BookingForm
