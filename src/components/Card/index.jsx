import CardContainer from './CardContainer';
import Description from './Description';
import ProfilePicture from './ProfilePicture';
import Title from '../Title';
import SocialMedia from '../SocialMedia';
import Subtitle from '../Subtitle';

export default function Card() {
   return (
      <CardContainer>
         <Title>Edmundo Vitor de Medeiros</Title>
         <Description>
            Graduando em ciência da computação na UFERSA, bolsista no projeto traDUS do Acesso a terra urbanizada e amante de games
         </Description>
         <ProfilePicture src="https://i.imgur.com/5TWhskk.jpg"/>
         <SocialMedia />
         <Subtitle>Hobbies</Subtitle>
         <Description>Jogar games</Description>
         <Description>Patinar</Description>
      </CardContainer>
   );
}