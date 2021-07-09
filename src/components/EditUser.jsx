import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row
} from "reactstrap";
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
                defaultValue={user.name}
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
                defaultValue={user.mail}
              />
            </FormGroup>
            <Button onClick={handleUpdateUser} className="mt-2" color="primary">
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
