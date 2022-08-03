

const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value:'123'
}

//bikin reducer

const rootReducer = (state = initialState, action) => {
    return state;

}

//store
const store = createStore(rootReducer);
console.log(store.getState())


