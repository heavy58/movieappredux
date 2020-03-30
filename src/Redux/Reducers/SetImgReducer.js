const SetImgReducer=(state='',action)=> {
    if(action.type==="SET_IMG") {
        return action.payload
    }else return state
}

export default SetImgReducer