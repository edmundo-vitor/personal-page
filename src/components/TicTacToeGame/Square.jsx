import Button from './Button';

export default function Square({ id, value, handleMove, disabled }) {

   function handleClick(){
      handleMove(id);
   } 

   return (
      <Button disabled={disabled} onClick={handleClick} >{value}</Button>
   );
}