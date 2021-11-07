import { Hero } from '../components/UI/Hero';
import styled from '@emotion/styled';
import { CardInput } from '../components/UI/CardInput';
import { Button } from '../components/UI/Button';
import { AxiosLogin } from '../services/AxiosLogin';
import { useState } from 'react';
// import { OrderProducts, ShowOrders } from "../services/OrderProducts"
// import { AxiosIndexProducts, AxiosProductsId } from '../services/AxiosProduct';
// import { AxiosShowUser, AxiosUpdateUser } from '../services/AxiosUser';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
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

export default function Login() {

  const history = useHistory();

  async function handleAxiosLogin(e){
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const response= await AxiosLogin({email: email, password: password});
       sessionStorage.setItem('token', await JSON.stringify(response.token))
    // await OrderProducts({date: "2021-03-18", address: "jr ceramicas 360", product_ids:[8]}).then(data => console.log(data));
    // await ShowOrders().then(data => console.log(data));
    // await AxiosIndexProducts().then(data => console.log(data));
    // await AxiosProductsId(1).then(data => console.log(data));
    // await AxiosShowUser().then(data => console.log(data, "showuser"));
    // await AxiosUpdateUser().then(data => console.log(data, "updateuser"));
    if (!response.token) return;
    history.push("/home");
  }

  return (
    <Page>
      <Hero prefix="login" />
      <Container>
        <Form  onSubmit={handleAxiosLogin}>
          <CardInput 
            textlabel="Email address"
            name="email"
            type="email"
            placeholder="my_mail@mail.com"
          />
          <CardInput 
            textlabel="Password"
            name="password"
            type="password"
            placeholder="**********"
          />
           <Button text="Login"/>
        </Form>         
      </Container>
    </Page>
  );
}