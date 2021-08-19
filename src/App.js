import GlobalStyle from './styles/GlobalStyle';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Initial from './pages/Initial';
import Contact from './pages/Contact';
import TicTacToe from './pages/TicTacToe';

import Menu from './components/Menu';

function App() {
   return (
      <>
         <Menu />

         <BrowserRouter>
            <Switch>
               <Route path='/' exact component={Initial} />
               <Route path='/contato' component={Contact} />
               <Route path='/jogo-da-velha' component={TicTacToe} />
            </Switch>
         </BrowserRouter>

         <GlobalStyle />
      </>   
   );
}

export default App;
