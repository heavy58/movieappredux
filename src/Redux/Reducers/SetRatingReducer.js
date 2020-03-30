const SetRatingReducer=(state=0,action)=> {
    if(action.type==="SET_RATING") {
        return action.payload
    }else return state
}

export default SetRatingReducer