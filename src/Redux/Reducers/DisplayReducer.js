const DisplayReducer=(state=true,action)=> {
    if(action.type==="DISPLAY") {
        return !state
    }else return state
}

export default DisplayReducer