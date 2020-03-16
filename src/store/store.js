import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    a: 'a',
};
const reducer = (prevState, action) => {
    switch (action.type) {
        default:
            console.log('a')
            return;
    }
}
const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    next(action);
}

const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, initialState, enhancer);

export default store;