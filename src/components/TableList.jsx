import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Col, Container, Row, Table } from "reactstrap";
import { deleteUser, filterUser } from "../actions/UserActions";

const TableList = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const sort = useSelector((state) => state.users.sort);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteUser = (id) => {
    const action = deleteUser(id);
    dispatch(action);
  };

  const handleSelectChange = (e) => {
    const action = filterUser(e.target.value);
    console.log(action);
    dispatch(action);
  };

  return (
    <Container>
      <Row className="m-4">
        <Col xs="6">
          <input
            className="w-50 px-2"
            type="text"
            placeholder="Search..."
            name="search"
            id="search"
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col xs="6">
          <select
            value={sort}
            onChange={handleSelectChange}
            className="w-25"
            name="select-filter"
            id="select-filter"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </Col>
      </Row>
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
              users
                .filter((val) =>
                  searchTerm === ""
                    ? val
                    : val.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.mail.toLowerCase().includes(searchTerm.toLowerCase())
                    ? val
                    : null
                )
                .map((user) => (
                  <tr key={user.id}>
                    <th className="text-center" scope="row">
                      {user.id}
                    </th>
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                    <td className="text-center">
                      <ButtonGroup>
                        <Link to={`/edit/${user.id}`}>
                          <Button color="warning">
                            EDIT <FaPen />
                          </Button>
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
