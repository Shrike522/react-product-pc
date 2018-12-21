import { GET_NAME, GET_USER } from './actionTypes';

// reducer
export const reducerGetName = (state, action) => {
    return ({
        ...state,
        name: action.payload
    });
};

export const reducerGetUser = (state, action) => {
    return ({
        ...state,
        user: action.payload
    });
};

const handleReducers = {
    GET_NAME: reducerGetName,
    GET_USER: reducerGetUser
};

const initState = {
    name: "aaa",
    user: "user"
};

export default function (state = initState, action) {
    const handle = handleReducers[action.type];
    return handle ? handle(state, action) : state;
}
