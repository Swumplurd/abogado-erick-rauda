import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import { AbogadoApp } from './AbogadoApp';

ReactDOM.render(
    <BrowserRouter>
        <AbogadoApp />
    </BrowserRouter>,
    document.getElementById('root')
)