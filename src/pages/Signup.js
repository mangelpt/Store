import { Hero } from '../components/UI/Hero';
import styled from '@emotion/styled';
import { CardInput } from '../components/UI/CardInput';
import { Button } from '../components/UI/Button';

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

export default function Signup() {
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
          />
          <CardInput 
            textlabel="Password"
            name="password"
            type="password"
            placeholder="**********"
          />
        </Form>
        <Button text="Sign-up"/>
      </Container>
    </Page>
  );
}