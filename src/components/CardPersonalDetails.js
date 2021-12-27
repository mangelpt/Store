import styled from "@emotion/styled";
import  {Input} from "./UI/Input"
import photo from "./person.png"

const CardPersonal = styled.div`
  background-color: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 16px 18px 18px 16px;
  width: 315px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin:0;
  padding: unset;
  margin-top:10px;
  align-self: center;
  form {
    margin-top:18px;
    width: 165px;
    display: flex;
    flex-direction: column;
  }

  input {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
    border: none;
    background: none;
    outline: none;
  }

  input[name="name"] {
    font-weight: 600;
  }

  input::placeholder {
    opacity: 0.5;
  }

  div {
    margin: 7px 0 10px 0;
    opacity: 0.2;
    border-top: 0.5px solid #000000; 
  }

  img {
    width: 91px;
    height: 100px;
    margin-top:18px;
    margin-left:16px;
  }
`;


export const TextArea = styled.textarea`
  width: 176px;
  min-height: 55px;
  color: #333333;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  ::placeholder {
    color: black;
    opacity: 0.5;
  }
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  border: 0;
  outline: none;
`;

export function CardPersonalDetails(props) {
  return (
    <CardPersonal>
      <img src={`${props.avatar_url|| photo}`} alt="profile" />
      <form>
        <Input
          type="text"
          name="name"
          value={props.name}
          placeholder="name"
          disabled="disabled"
        />
        <div />
        <Input
          type="email"
          name="email"
          value={props.email}
          placeholder="email"
          disabled="disabled"
        />
        <div />
        <Input
          type="number"
          name="phone"
          value={props.phone}
          placeholder="phone"
          disabled="disabled"
        />
        <div />
        <TextArea
          type="text"
          name="address"
          value={props.address}
          placeholder="address"
          disabled="disabled"
        />
      </form>
    </CardPersonal>
  );
}