const init = [
    {id:1,title:"ANGEL HAS FALLEN",img:"https://resizing.flixster.com/bwkGy3wVXML6meWZaP_sjANLrNY=/fit-in/200x296.2962962962963/v1.bTsxMzEzOTAzNjtqOzE4MTk3OzEyMDA7MTk0NDsyODgw",rating:4,description:"Cut from the same rough cloth as its predecessors, Angel Has Fallen rounds out a mostly forgettable action trilogy in fittingly mediocre fashion."},{id:5,title:"ANGEL HAS FALLEN",img:"https://resizing.flixster.com/bwkGy3wVXML6meWZaP_sjANLrNY=/fit-in/200x296.2962962962963/v1.bTsxMzEzOTAzNjtqOzE4MTk3OzEyMDA7MTk0NDsyODgw",rating:4,description:"Dans la banlieue d'un univers imaginaire, deux frères elfes se lancent dans une quête extraordinaire pour découvrir s'il reste encore un peu de magie dans le monde."}
    ]




const MovieListReducer=(state=init,action)=> {
    if(action.type==="ADD_MOVIE") {
        return [...state , action.payload]
    }else if(action.type==="DELETE") {
        return state.filter(el=>el.id !==action.payload)
    }else if(action.type ==="EDIT") {
        return state.map(el=>el.id===action.payload.id ? {...action.payload}:el)
    }
   return state
}

export default MovieListReducer