import Square from './Square';
import Div from '../Div';

export default function BoardRow({ id, value, handleMove, disabled }) {  

   return (
      <Div>
         <Square disabled={disabled} id={id[0]} value={value[id[0]]} handleMove={handleMove} />
         <Square disabled={disabled} id={id[1]} value={value[id[1]]} handleMove={handleMove} />
         <Square disabled={disabled} id={id[2]} value={value[id[2]]} handleMove={handleMove} />
      </Div>
   );
}