import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header/header.js';

import Home from './pages/Home/Home.js';
import Filme from './pages/Filme/Filme.js';
import Favoritos from './pages/Favoritos/Favoritos.js'
import notFound from './pages/Pagina_erro/notFound.js'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/filme/:id' component={Filme} />
                <Route exact path='/favoritos' component={Favoritos} />
                <Route path="*" component={notFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas;