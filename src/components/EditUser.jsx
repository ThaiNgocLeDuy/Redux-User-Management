import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Label, Row } from "reactstrap";
import { updateUser } from "../actions/UserActions";

const EditUser = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((x) => x.id === parseInt(id))
  );
  const nameRef = useRef();
  const mailRef = useRef();

  const handleUpdateUser = () => {
    const newName = nameRef.current.value;
    const newMail = mailRef.current.value;
    const editUser = {
      id: user.id,
      newName,
      newMail,
    };
    const action = updateUser(editUser);
    dispatch(action);
    history.push("/");
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
                defaultValue={user.name}
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
                defaultValue={user.mail}
              />
              <div className="cut cut-short" />
              <Label htmlFor="email" className="placeholder">
                Email
              </Label>
            </div>
            <Button
              onClick={handleUpdateUser}
              className="submit"
              color="primary"
            >
              SAVE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

EditUser.propTypes = {
  addUser: PropTypes.func,
};

export default EditUser;
