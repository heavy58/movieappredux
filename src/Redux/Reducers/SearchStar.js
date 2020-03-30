const SearchStarReducer=(state=5,action)=> {
    if(action.type==="SEARCH_STAR") {
        return action.payload
    }else return state
}

export default SearchStarReducer