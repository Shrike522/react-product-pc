import {combineAsyncReducers} from 'redux-async-actions-reducers';

import MainReducers from '../Layout/reducer';
import HomeReducers from '../pages/Home/reducer';

const reducers = combineAsyncReducers({
    main: MainReducers,
    home: HomeReducers,
});

export default reducers;
