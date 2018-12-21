import {combineAsyncReducers} from 'redux-async-actions-reducers';

import HomeReducers from '../pages/Home/reducer';

const reducers = combineAsyncReducers({
    home: HomeReducers
});

export default reducers;
