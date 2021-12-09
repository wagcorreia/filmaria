import Rotas from './routers.js';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


// https://sujeitoprogramador.com/r-api/?api=filmes/

function App() {
  return (
    <div className="app">
      <Rotas/>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
