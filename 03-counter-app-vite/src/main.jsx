import React from 'react'; //imr
import ReactDOM from 'react-dom/client'; //imp

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* title='The Office' subTitle={123} */}
        {/* <FirstApp title='The Office' /> */}
        <CounterApp value={10} />
        {/* <FirstApp /> */}
    </React.StrictMode>
)