import styled from "@emotion/styled";
import  {Input} from "./UI/Input"
import photo from "./person.png"

const CardPersonal = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 16px 18px 18px 16px;
  width: 315px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  
  form {
    width: 182px;
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
  }
`;


export const TextArea = styled.textarea`
  width: 206px;
  min-height: 55px;
  color: #333333;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  ::placeholder {
    color: #333333;
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
            <img src={photo} alt="profile"/>
            <form>
                <Input
                type="text"
                name="name"
                value={props.name}
                placeholder="name"
                disabled={props.disabled}/>
                <div />
                <Input
                type="email"
                name="email"
                value={props.email}
                placeholder="email"
                disabled={props.disabled}/>
                <div />
                <Input
                type="tel"
                name="phone"
                value={props.phone}
                placeholder="phone"
                disabled={props.disabled}/>
                <div />
                <TextArea
                type="text"
                name="address"
                value={props.address}
                placeholder="address"
                disabled={props.disabled}
                />
            </form>
    </CardPersonal>
  )
}