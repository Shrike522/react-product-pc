import React from 'react';
import ReactDOM from 'react-dom';
import RouterTree from  './router';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(<Provider store={store}><RouterTree /></Provider>,
    document.getElementById('root'));

