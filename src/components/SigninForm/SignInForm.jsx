import React, { useState } from "react";
import {
  Container,
  FormContainer,
  FormName,
  InputsContainer,
  FormLabel,
  FormInput,
  FormButton,
} from "./SignInForm-style";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (email && password) {
      alert(`${email}, ${password}`);
    } else {
      alert("Incorrect password or email");
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormName>Sign In</FormName>
        <InputsContainer>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </InputsContainer>
        <FormButton type="submit" onClick={signIn}>
          Sign In
        </FormButton>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
