import styled from "@emotion/styled"
import  {CardInput} from "./UI/CardInput"

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap:8px;

`

export function CardProfile() {
  return (
    <>
        <ContainerForm>
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
           <CardInput 
                      textlabel="Address"
                      name="address"
                      type="text"
                      placeholder="Calle el rosal, urb. el Jardin">
           </CardInput> 
            
        </ContainerForm>
    </>
  )
}