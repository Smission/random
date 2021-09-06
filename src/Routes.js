import React , {useState, useEffect} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from './pages/Home/Landing';
import About from './pages/About/About';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history"

ReactGA.initialize('G-BR2WQG60FC');  

function logPageView() { 
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
}

function Routes() {
    const [currentPage] = useState(window.location.pathname);

    useEffect( () => {
        logPageView()
    }, [currentPage]);
    
    return (
        <BrowserRouter history={createBrowserHistory()}>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/try" exact component={About}/>
        </BrowserRouter>
    )
}

export default Routes