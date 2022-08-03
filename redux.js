const redux = require('redux')
const createStore = redux.createStore

// global state
const initialState = {
    value:1,
    value2:2
}

//bikin reducer
const rootReducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'ADD_VALUE'){
        return {
            ...state,
            value2: state.value2 + 1
        }
    }
    return state;

}

//bikin store
const store = createStore(rootReducer);
console.log(store.getState())

//dispatching
store.dispatch({
    type:'ADD_VALUE'
})

console.log(store.getState())


