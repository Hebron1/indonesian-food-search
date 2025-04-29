import React from "react";
import {Form, Input, Button} from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "./usernameSlice";
import withMounted from "../../hoc/WithMounted";

function Login() {

  const usernameSelector = useSelector((state) => state.username.user)
  const dispatch = useDispatch();
  console.log(usernameSelector)

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value
    dispatch(setUsername(userName))
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your email"
        type="text"
      />
      <h1>{usernameSelector}</h1>
      <Button type="submit" variant="bordered">
        Submit
      </Button>

    </Form>
  );
}

export default withMounted(Login)