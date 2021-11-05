import { Hero } from '../components/UI/Hero';
import styled from '@emotion/styled';
import { CardInput } from '../components/UI/CardInput';
import { Button } from '../components/UI/Button';
import { AxiosLogin } from '../services/AxiosLogin';
import { useState } from 'react';
import { OrderProducts, ShowOrders } from "../services/OrderProducts"

const Page = styled.div`
  width: 100%;
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

  const [email,SetEmail] = useState("");
  const [password,SetPassword] = useState("");

  async function handleAxiosLogin(){
    await AxiosLogin({email, password}).then(data => console.log(data));
    //await OrderProducts({date: "2021-03-18", address: "jr ceramicas 360", product_ids:[8]}).then(data => console.log(data));
    //await ShowOrders().then(data => console.log(data));
  }

  return (
    <Page>
      <Hero prefix="login" />
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
        <Button fnc={handleAxiosLogin} text="Login"/>
      </Container>
    </Page>
  );
}