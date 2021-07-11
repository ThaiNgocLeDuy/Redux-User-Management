import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Form, Label, Row } from "reactstrap";
import { addUser } from "../actions/UserActions";

const AddUser = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const nameRef = useRef();
  const mailRef = useRef();

  const [error, setError] = useState("");
  const [mailError, setMailError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const mail = mailRef.current.value;

    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (mail === "" && name === "") setError("This field is required");
    if (!mail.match(regex)) {
      setMailError("This email is invalid");
    } else {
      const user = {
        name: name,
        mail: mail,
      };
      const action = addUser(user);
      dispatch(action);
      history.push("/");
      nameRef.current.value = "";
      mailRef.current.value = "";
    }
  };

  return (
    <Container>
      <Row>
        <Col className="m-auto" xs="6">
          <Form className="form">
            <div className="title">Welcome</div>
            <div className="input-container ic1">
              <input
                id="name"
                className="input"
                type="text"
                placeholder=" "
                autoComplete="off"
                ref={nameRef}
              />
              <p style={{ color: "red" }}>{error}</p>
              <div className="cut" />
              <Label htmlFor="name" className="placeholder">
                Name
              </Label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="email"
                placeholder=" "
                autoComplete="off"
                ref={mailRef}
              />
              <p style={{ color: "red" }}>{mailError}</p>
              <div className="cut cut-short" />
              <Label htmlFor="email" className="placeholder">
                Email
              </Label>
            </div>
            <Button
              onClick={onSubmit}
              type="submit"
              className="submit"
              color="primary"
            >
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
