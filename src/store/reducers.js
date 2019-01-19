import {combineAsyncReducers} from 'redux-async-actions-reducers';

import MainReducers from '../Layout/reducer';
import LoginReducers from '../pages/Login/reducer';
import HomeReducers from '../pages/Home/reducer';
import ListReducers from '../pages/List/reducer';
import DetailReducers from '../pages/Detail/reducer';

const reducers = combineAsyncReducers({
    main: MainReducers,
    login: LoginReducers,
    home: HomeReducers,
    list: ListReducers,
    detail: DetailReducers,
});

export default reducers;
