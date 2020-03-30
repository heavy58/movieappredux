const SetDescription=(state='',action)=> {
    if(action.type==="SET_DESC"){
        return action.payload
    }else return state
}

export default SetDescription