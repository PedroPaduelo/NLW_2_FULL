import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import Landing from './pages/Landing';
import List from './pages/Lista';
import Forme from './pages/Forme_Cad';



function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={List} />
            <Route path="/give-classes" component={Forme} />
        </BrowserRouter>
    )
}


export default Routes;