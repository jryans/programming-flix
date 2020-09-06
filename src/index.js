import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";

ReactGA.initialize('UA-136308253-1', {debug: false});

ReactDOM.render(
    <BrowserRouter basename="/programming-flix">
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
