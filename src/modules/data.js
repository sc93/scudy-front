
const SETDATA = 'SETDATA';

export const setData = (data)=> ({type : SETDATA, data : data});

const initialState = [];
const data = (state = initialState, action) => {
    switch (action.type) {
        case SETDATA:
            return action.data;
        default:
            return [... state]
    }
}

export default data;