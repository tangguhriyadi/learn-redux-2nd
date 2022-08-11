const alertReducer = (state = '',action) => {
    switch(action.type){
        case 'SHOW_ALERT':
        alert('OI')
        break
        default: return state = ''
    }
}
export default alertReducer