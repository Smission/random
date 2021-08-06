import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from './pages/Home/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage}/>
        </BrowserRouter>
    )
}

export default Routes