import { createStore } from 'redux-async-actions-reducers';
import { applyMiddleware, compose } from 'redux';
import middlewares from './middlewares';
import { composeWithDevTools } from 'redux-devtools-extension'

const configStore = reducers => createStore(
    reducers,
    {},
    compose(
        applyMiddleware(...middlewares),
        (process.NODE_ENV === "development") ? composeWithDevTools() : f => f
    )
);

export default configStore;
