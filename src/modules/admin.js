import {produce} from 'immer';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GETSTATE = 'GETSTATE';

export const log_In = () => ({ type: LOGIN });
export const log_Out = () => ({ type: LOGOUT });
export const getState = () => ({ type: GETSTATE });

const initialState = {
    "learning" : false,
    "login" : false, 
};

const login = (prevState = initialState, action) => {
    return produce(prevState, draft => {
        switch (action.type) {
            case LOGIN:
                draft.login = true;
                break;
            case LOGOUT:
                draft.login = false;
                break;
            case GETSTATE:
                draft.studying = false;
                draft.endTime = new Date();
                break;
            default:
                break;
        }
    })
}

export default login;