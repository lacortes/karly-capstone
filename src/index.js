import './styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import ComingSoon from './components/pages/ComingSoon';
import ToLandingPage from './components/util/ToLandingPage';

const container = document.querySelector('#root');

const comingSoon = false;
let component = null;
if (comingSoon) {
    component = (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="coming-soon" element={ <ComingSoon />}/>
                    <Route path="*" element={ <ToLandingPage /> }/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    component = 
    <React.StrictMode>
        <App />
    </React.StrictMode>;
}
ReactDOM.render(component, container);