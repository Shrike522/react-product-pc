import {combineAsyncReducers} from 'redux-async-actions-reducers';

import MainReducers from '../Layout/reducer';
import HomeReducers from '../pages/Home/reducer';
import ListReducers from '../pages/List/reducer';

const reducers = combineAsyncReducers({
    main: MainReducers,
    home: HomeReducers,
    list: ListReducers,
});

export default reducers;
