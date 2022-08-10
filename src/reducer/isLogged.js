const loggedReducer = (state = 'asd', action) => {
    switch(action.type){
        case 'SIGN_IN':
            return 'dsadas'
        default: return state
    }
}

export default loggedReducer