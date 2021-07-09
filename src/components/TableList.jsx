import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Container, Row, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../actions/UserActions";
import { Link } from "react-router-dom";

const TableList = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const handleDeleteUser = (id) => {
    const action = deleteUser(id);
    dispatch(action);
    console.log(action);
  };

  return (
    <Container>
      <Row>
        <Table hover bordered striped responsive>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length !== 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <th className="text-center" scope="row">
                    {user.id}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.mail}</td>
                  <td className="text-center">
                    <ButtonGroup>
                      <Link
                        to={`/edit/${user.id}`}
                      >
                        <Button color="warning">EDIT</Button>
                      </Link>
                      <Button
                        onClick={() => handleDeleteUser(user.id)}
                        color="danger"
                      >
                        DELETE
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan="4">No data</th>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

TableList.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
};

export default TableList;
