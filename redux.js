const redux = require('redux')
const createStore = redux.createStore

//2.2 global state
const initialState = {
    value:1,
    value2:2
}

//2.1 bikin reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_VALUE':
            return {
                ...state,
                value: state.value + 1
            }
        case 'ADD_VALUE2':
            return {
                ...state,
                value2: state.value2 + action.newValue
            }
        default:
            return state
    }

}

// 1.bikin store
const store = createStore(rootReducer);
console.log(store.getState())

//4. subscribe
store.subscribe(() => {
    console.log('store change :', store.getState())
})

//3. dispatching / execution
store.dispatch({
    type:'ADD_VALUE'
})
store.dispatch({
    type:'ADD_VALUE2',
    newValue:12
})

console.log(store.getState())
