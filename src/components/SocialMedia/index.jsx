import Link from '../Link';
import Image from './Image';
import Container from './Container';

export default function SocialMedia() {
   return (
      <Container>
         <Link target='_blank' href='https://www.linkedin.com/in/edmundo-vitor/'>
            <Image src='https://image.flaticon.com/icons/png/512/1051/1051384.png' />
         </Link>

         <Link target='_blank' href='https://www.instagram.com/edmundo_vtr/'>
            <Image src='https://image.flaticon.com/icons/png/512/87/87390.png' />
         </Link>

         <Link target='_blank' href='https://github.com/edmundo-vitor'>
            <Image src='https://image.flaticon.com/icons/png/512/38/38401.png' />
         </Link>
      </Container>
   );
}