import { useState } from 'react';

import Subtitle from '../Subtitle';
import Board from './Board';
import BoardRow from './BoardRow';
import Container from './Container';
import ButtonPrimary from '../ButtonPrimary';
import Historic from './Historic';

export default function TicTacToeGame() {
   const [currentValue, setCurrentValue] = useState('X');
   const [position, setPosition] = useState(Array(9).fill(''));
   const [historic, setHistoric] = useState([]);
   const [winner, setWinner] = useState(false);
   const [move, setMove] = useState(0);

   const id = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   
   async function handleMove(positionModify) {
      setPosition(() => {
         position[positionModify] = currentValue;
         return position;
      });

      setHistoric(() => {
         let movement = position.slice();
         let arrayHistoric = historic.slice();
         arrayHistoric.push(movement);
         return arrayHistoric;
      });

      //Se tirar da erro (não sei porque)
      let result = await calculateWinner(position);

      if(calculateWinner(position)){
         setWinner(true);
      }else{
         currentValue === 'X' ? setCurrentValue('O') : setCurrentValue('X');
      }

      setMove(move+1);
   }

   function calculateWinner(movement){
      let sequenceWin = [
         //Linhas
         [0, 1, 2], 
         [3, 4, 5], 
         [6, 7, 8],

         //Diagonais
         [0, 4, 8],
         [2, 4, 6],

         //Colunas
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8]
      ];

      //Verifica se tem alguma sequência de vitória
      for(let count = 0; count < sequenceWin.length; count++){
         const [a, b, c] = sequenceWin[count];
         if(movement[a] !== '' && movement[a] === movement[b] && movement[a] === movement[c]) {
            return true;
         }
      }

      return null;
   }

   function handleRestart() {
      setCurrentValue('X');
      setPosition(Array(9).fill(''));
      setHistoric([]);
      setWinner(false);
   }

   function handleBackMove(moveTo) {
      setPosition(() => {
         return moveTo;
      });
   }

   return (
      <Container>
         <Board>
            <Subtitle>Próximo jogador: {currentValue}</Subtitle>

            <BoardRow disabled={winner ? true : false} id={id.slice(0,3)} value={position} currentValue={currentValue} handleMove={(positionModify) => handleMove(positionModify)} />
            <BoardRow disabled={winner ? true : false} id={id.slice(3,6)} value={position} currentValue={currentValue} handleMove={(positionModify) => handleMove(positionModify)} />
            <BoardRow disabled={winner ? true : false} id={id.slice(6,9)} value={position} currentValue={currentValue} handleMove={(positionModify) => handleMove(positionModify)} />

            { 
               winner ? 
                  <>
                     <Subtitle>Ganhador: {currentValue}</Subtitle>
                     <ButtonPrimary onClick={handleRestart}>Reiniciar</ButtonPrimary>
                  </>
               : 
                  <></> 
            }
         </Board>
         
         {
            historic.length > 0 ? 
               <Historic>
                  <Subtitle>Voltar para: </Subtitle>
                  {
                     historic.map((movement, index) => {
                        return <ButtonPrimary onClick={() => handleBackMove(movement)}>Jogada {index+1}</ButtonPrimary>
                     })
                  }  
               </Historic>
            : 
            <></>
         }
      </Container>
   );
}