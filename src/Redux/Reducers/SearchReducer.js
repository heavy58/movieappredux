const SearchReducer=(state='',action)=> {
    if(action.type==="SEARCH") {
        return action.payload
    }else return state
}

export default SearchReducer