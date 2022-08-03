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
            value: state.value + 1
        }
    }
    if(action.type === 'ADD_VALUE2'){
        return {
            ...state,
        value2: state.value2 + action.newValue
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

store.dispatch({
    type:'ADD_VALUE2',
    newValue:12
})

console.log(store.getState())
