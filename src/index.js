import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Converter from './Converter';

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
