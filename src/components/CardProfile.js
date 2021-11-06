import styled from "@emotion/styled"
import  {CardInput} from "./UI/CardInput"
// import camera from "./Vector.svg"
import { Lbl } from "./UI/Labels"
import { TextArea } from "./UI/CardInput"
import {useState} from "react"
import {ContainerInput} from "./UI/CardInput"
import { Button } from "./UI/Button"
import { AxiosUpdateUser } from "../services/AxiosUser"

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 150px;
    width: 314px;
    height: 312px;
    background-color:white;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    .infoPersonal{
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
    width: 214px;
    height: 300px;
    background-color:white;
    padding-top:12px;
    border-radius: 20px;
    margin-right: 11px;
`

const ConatinerFile = styled.div`
    text-align: center;
    margin: 0 auto;
    height: 80px;
    width: 72px;
    background: #F6F6F9;
    border-radius: 10px;
    margin-top:12px;
    padding-top:12px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .avatar {
        width: 72px;
        height: 80px;
        border-radius: 10px;
    }

    label {
        color: #B8B8BB
    }

    label img {
        width: 91px;
        height: 100px;
    }

    input[type="file"]{
        display: none;
    }

    
`
export function CardProfile(props) {

    const [name, SetName] = useState(props.name);
    const [email,SetEmail] = useState(props.email);
    const [phone,SetPhone] = useState(props.password);
    const [address,SetAddress] = useState(props.address);


    function handleSubmit(e) {
        e.preventDefault();
        let forminfo = new FormData();
        forminfo.append("avatar", e.target.elements.fileimage.files[0]);
        forminfo.append("name", e.target.elements.name.value);
        forminfo.append("phone", e.target.elements.phone.value);
        forminfo.append("address", e.target.elements.address.value);

        AxiosUpdateUser(forminfo).then(data => console.log(data));
    }


    function showPreview(event) {
      if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0]);
        const preview = document.querySelector(".avatar");
        preview.src = src;
        preview.onload = function() {
          URL.revokeObjectURL(this.src);
        }
      }
    }

  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        <div className="infoPersonal">
          <ConatinerFile>
            <label style= {{ "margin-left": -2, "margin-top": -12}} for="file">
              <img className="avatar" src={props.avatar_url} alt="imagecamera" />
              Upload image
            </label>
            <input
              id="file"
              type="file"
              name="fileimage"
              accept="image/*"
              onChange={showPreview}
            />
          </ConatinerFile>
          <ContainerInfo>
            <CardInput
              textlabel="Name"
              name="name"
              type="text"
              placeholder={name ? name : props.name}
            ></CardInput>
            <CardInput
              textlabel="Email"
              name="email"
              type="email"
              placeholder={email ? email : props.email}
            ></CardInput>
            <CardInput
              textlabel="Phone"
              name="phone"
              type="nuber"
              placeholder={phone ? phone : props.phone}
            ></CardInput>
            <ContainerInput>
              <Lbl>Address</Lbl>
              <TextArea
                type="text"
                name="address"
                placeholder={address ? address : props.address}
                maxLength="140"
              ></TextArea>
              <div />
            </ContainerInput>
          </ContainerInfo>
        </div>
        <div>
          <Button text="Update" />
        </div>
      </ContainerForm>
    </>
  );
}