import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Form, Button, Label } from "reactstrap";
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
    };
    const action = addUser(user);
    dispatch(action);
    history.push("/");
    nameRef.current.value = "";
    mailRef.current.value = "";
  };

  return (
    <Container>
      <Row>
        <Col className="m-auto" xs="6">
          <Form className="form">
            <div className="title">Welcome</div>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                placeholder=" "
                autoComplete="off"
                ref={nameRef}
              />
              <div className="cut" />
              <Label htmlFor="name" className="placeholder">
                Name
              </Label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                autoComplete="off"
                ref={mailRef}
              />
              <div className="cut cut-short" />
              <Label htmlFor="email" className="placeholder">
                Email
              </Label>
            </div>
            <Button onClick={handleAddUser} className="submit" color="primary">
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
