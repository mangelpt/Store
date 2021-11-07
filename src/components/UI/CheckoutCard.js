import styled from "@emotion/styled";

const Checkout = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 25px 53px 20px 30px;
  width: 232px;
  margin-bottom: 10px;
  form {
    width: 232px;
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
`;

export function CheckoutCard(props) {
  return (
    <Checkout>
      <form>
        <input
          type="text"
          name="name"
          value={props.name}
          placeholder="name"
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <div />
        <input
          type="text"
          name="address"
          value={props.address}
          onChange={props.onChange}
          placeholder="address" 
          disabled={props.disabled}
        />
        <div />
        <input
          type="tel"
          name="phone"
          value={props.phone}
          placeholder="phone"
          onChange={props.onChange}
          disabled={props.disabled}
        />
      </form>
    </Checkout>
  )
}