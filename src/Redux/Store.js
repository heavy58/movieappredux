import { createStore, combineReducers } from "redux";
import SearchReducer from "./Reducers/SearchReducer";
import SearchStarReducer from "./Reducers/SearchStar";
import MovieListReducer from "./Reducers/MovieListReducer";
import SetNameReducer from "./Reducers/SetNameReducer";
import SetImgReducer from "./Reducers/SetImgReducer";
import SetRatingReducer from "./Reducers/SetRatingReducer";
import DisplayReducer from "./Reducers/DisplayReducer";
import SetDescription from "./Reducers/SetDescription";


const Store = createStore (combineReducers({
     search :SearchReducer ,
     star : SearchStarReducer, 
     MovieList : MovieListReducer, 
     name : SetNameReducer , 
     img:SetImgReducer , 
     rating :SetRatingReducer,
     display: DisplayReducer , 
     description : SetDescription
  
    
}))


export default Store