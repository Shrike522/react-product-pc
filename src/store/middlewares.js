import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [];
middlewares.push(saga);

if(process.NODE_ENV === "development"){
    const logger = createLogger();
    middlewares.push(logger);
}

export default middlewares;