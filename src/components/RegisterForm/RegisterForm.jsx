import React from "react";
import {
  Container,
  FormContainer,
  FormName,
  InputsContainer,
  FormLabel,
  FormInput,
  FormButton,
} from "./RegisterForm-style";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser(e) {
    // if ( this.state.username && this.state.email && this.state.password && this.state.password === this.state.password2 ) {
    //     e.preventDefault();
    //     alert(`${this.state.username}, ${this.state.email}, ${this.state.password}`);
    // } else {
    //     e.preventDefault();
    //     alert('Please, make sure email adress exists and password fields match');
    // }
    fetch("https://webhook.site/3e2f7029-4358-4457-b1c0-0b50e25b71b6", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json", // what kind of response is accepted
        "Content-type": "application/json", // what type of data is sent
      },
      body: JSON.stringify(this.state),
    });
  }

  render() {
    const { username, email, password, password2 } = this.state;

    return (
      <Container>
        <FormContainer onSubmit={this.registerUser}>
          <FormName>Register</FormName>
          <InputsContainer>
            <FormLabel>Username</FormLabel>
            <FormInput
              type="text"
              name="username"
              value={username}
              onChange={this.inputHandler}
              placeholder="Enter your username"
            />
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.inputHandler}
              placeholder="Enter your email"
            />
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.inputHandler}
              placeholder="Enter your password"
            />
            <FormLabel>Repeat your password</FormLabel>
            <FormInput
              type="password"
              name="password2"
              value={password2}
              onChange={this.inputHandler}
            />
          </InputsContainer>
          <FormButton type="submit">Register</FormButton>
        </FormContainer>
      </Container>
    );
  }
}

export default RegisterForm;
