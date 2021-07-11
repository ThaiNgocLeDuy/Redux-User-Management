import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Container, Row, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../actions/UserActions";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TableList = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleDeleteUser = (id) => {
    const action = deleteUser(id);
    dispatch(action);
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
                        <Button color="warning">EDIT <FaPen /></Button>
                      </Link>
                      <Button
                        onClick={() => handleDeleteUser(user.id)}
                        color="danger"
                      >
                        DELETE <RiDeleteBin2Fill />
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
