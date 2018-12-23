import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layout';
import { Provider } from 'react-redux';
import './style/base.scss';

import store from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));

