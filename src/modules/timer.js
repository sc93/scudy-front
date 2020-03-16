import {produce} from 'immer';
const TIMERSTART = 'TIMER/START';
const TIMEREND = 'TIMER/END';
const UPCOUNT = 'UPCOUNT';

export const timerStart = () => ({ type: TIMERSTART });
export const timerEnd = () => ({ type: TIMEREND });
export const upCount = () => ({ type: UPCOUNT });

const initialState = {
    studying: false,
    startTime: null,
    endTime: null,
};

const timer = (prevState = initialState, action) => {
    return produce(prevState, draft => {
        switch (action.type) {
            case TIMERSTART:
                draft.studying = true;
                draft.startTime = new Date();
                break;
            case TIMEREND:
                draft.studying = false;
                draft.endTime = new Date();
                break;
            default:
                break;
        }
    })
}

export default timer;