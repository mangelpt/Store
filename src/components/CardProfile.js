import styled from "@emotion/styled"
import  {CardInput} from "./UI/CardInput"
import camera from "./Vector.svg"
import { Lbl } from "./UI/Labels"
import { TextArea } from "./UI/CardInput"
import {ContainerInput} from "./UI/CardInput"

const ContainerForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 4px;
    width: 314px;
    height: 312px;
    background-color:white;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
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

    label {
        color: #B8B8BB;
    }

    input[type="file"]{
        display: none;
    }
`
export function CardProfile() {


  return (
    <>
        <ContainerForm>
            <ConatinerFile>
               <label for="file">
                    <img src={camera} alt="imagecamera" />
                    Upload image
               </label>
               <input id="file" type="file" name="file" />
            </ConatinerFile>
            <ContainerInfo>
                <CardInput 
                            textlabel="Name"
                            name="name"
                            type="text"
                            placeholder="Margarita">
                </CardInput> 
                <CardInput 
                            textlabel="Email"
                            name="email"
                            type="email"
                            placeholder="margarita@gmail.com">
                </CardInput> 
                <CardInput 
                            textlabel="Phone"
                            name="phone"
                            type="nuber"
                            placeholder="987654321">
                </CardInput> 
                <ContainerInput>
                    <Lbl>Address</Lbl>
                    <TextArea type="text"
                        name="address"
                        placeholder="Calle el rosal, urb. el Jardin"
                        maxLength="140"
                    >
                    </TextArea>
                </ContainerInput>
            </ContainerInfo>
        </ContainerForm>
    </>
  )
}