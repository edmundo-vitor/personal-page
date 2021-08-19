import MenuBar from "./MenuBar";
import MenuItem from "./MenuItem";

export default function Menu() {
   return (
      <>
         <MenuBar>
            <MenuItem href='/'>Início</MenuItem>
            <MenuItem href='/contato'>Contato</MenuItem>
            <MenuItem href='/jogo-da-velha'>Jogo da velha</MenuItem>
         </MenuBar>   
      </>
   );
}