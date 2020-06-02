import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Contextt/GlobalState";

import { v4 as uuid } from "uuid";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          onChange={onChange}
          value={name}
          placeholder="  Enter Name..."
        ></Input>
      </FormGroup>
      <Button type="submit" color="secondary">
        Submit
      </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
