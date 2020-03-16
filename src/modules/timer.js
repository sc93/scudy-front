const TIMERSTART = 'TIMER/START';
const TIMEREND = 'TIMER/END';
const UPCOUNT = 'UPCOUNT';

export const timerStart = () => ({ type: TIMERSTART });
export const timerEnd = () => ({ type: TIMEREND });
export const upCount = () => ({type: UPCOUNT});

const initialState = {
    studying : false,
    startTime : null,
    endTime : null,
};

const timer = (state = initialState, action) => {
    switch (action.type) {
        case TIMERSTART:
            return {
                ... state,
                studying : true,
                startTime : new Date(),
            }
        case TIMEREND: 
            return {
                ... state,
                studying : false,
                endTime : new Date(),
            }
        default:
            return {
                studying : false,
                startTime : null,
                endTime : null,
            }
    }
}

export default timer;