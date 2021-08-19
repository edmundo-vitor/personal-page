import ButtonPrimary from "../ButtonPrimary";
import CardContainer from "../Card/CardContainer";
import Input from "../Input";
import Label from "../Label";
import Subtitle from "../Subtitle";
import TextArea from "../TextArea";

export default function ContactForm() {
   return (
      <>
         <CardContainer>
            <Subtitle>Contato</Subtitle>
            <Label>Digite seu nome: </Label>
            <Input type="text" />

            <Label>Digite seu e-mail: </Label>
            <Input type="text" />

            <Label>Texto: </Label>
            <TextArea></TextArea>

            <ButtonPrimary>Enviar</ButtonPrimary>
         </CardContainer>
      </>
   );
}