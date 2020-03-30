import React from 'react'
import {connect} from 'react-redux'
import MovieList from './MovieList';

const Description = (props) => {
    return ( <div>
        {console.log(props)}
        {props.MovieList.filter(el=>el.id===Number(props.match.params.id)).map(el=><p>{el.description}</p>)}
    </div> );
}
 
const mapStateToProps=(state)=> {
    return {
        MovieList : state.MovieList
    }
}


export default connect(mapStateToProps,null)(Description);