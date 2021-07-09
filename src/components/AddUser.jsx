import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { addUser } from "../actions/UserActions";

const AddUser = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const nameRef = useRef();
  const mailRef = useRef();

  const handleAddUser = () => {
    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const user = {
      name: name,
      mail: mail,
    }
    const action = addUser(user);
    console.log(action);
    dispatch(action);
    history.push("/");
    nameRef.current.value = "";
    mailRef.current.value = "";
  };

  return (
    <Container>
      <Row>
        <Col className="m-auto" xs="6">
          <Form>
            <FormGroup>
              <Label for="exampleName">Name:</Label>
              <input
                autoComplete="off"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                ref={nameRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email:</Label>
              <input
                autoComplete="off"
                placeholder="Email"
                type="email"
                name="mail"
                id="mail"
                ref={mailRef}
              />
            </FormGroup>
            <Button onClick={handleAddUser} className="mt-2" color="primary">
              ADD
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

AddUser.propTypes = {
  addUser: PropTypes.func,
};

export default AddUser;
