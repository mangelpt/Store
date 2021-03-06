import { Hero } from '../components/UI/Hero';
import styled from '@emotion/styled';
import { CardInput } from '../components/UI/CardInput';
import { Button } from '../components/UI/Button';
import { useState } from 'react';
import { AxiosSignUp } from '../services/AxiosLogin';
import { NavLink } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  position: relative;
`

const Form = styled.form`
  display: flex;
  width: 314px;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 40px;
`

export default function Signup() {

  const [email,SetEmail] = useState("");
  const [password,SetPassword] = useState("");

  function handleAxiosLogin(){
    AxiosSignUp({email, password}).then(data => console.log(data));
  }

  return (
    <Page>
      <Hero prefix="signup" />
      <Container>
        <Form>
          <CardInput 
            textlabel="Email address"
            name="email"
            type="email"
            placeholder="my_mail@mail.com"
            handleaxios={(e) => SetEmail(e.target.value)}
          />
          <CardInput 
            textlabel="Password"
            name="password"
            type="password"
            placeholder="**********"
            handleaxios={(e) => SetPassword(e.target.value)}
          />
        </Form>
        <NavLink to="/home">
          <Button fnc={handleAxiosLogin} text="Sign-up"/>
        </NavLink>
      </Container>
    </Page>
  );
}