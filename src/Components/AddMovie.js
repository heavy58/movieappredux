import React from 'react';
import {connect} from 'react-redux'

const AddMovie = (props) => {
    let newMovie = {
        id: Math.random() ,
        title : props.name , 
        rating : props.rating , 
        img :props.img ,
        description : props.description
    }
    return ( <div>
         {/* <div style={{display: props.display&&"none" }}> */}
        <input type="text" placeholder="name" onChange={(e)=>props.ChangeName(e.target.value)} />
        <input type="text" placeholder="rating" onChange={(e)=>props.ChangeRating(e.target.value)} />
        <input type="text" placeholder="img" onChange={(e)=>props.ChangeImg(e.target.value)} />
        <input type="text" placeholder="description" onChange={(e)=>props.ChangeDescription(e.target.value)} />

        <button onClick={()=>props.add(newMovie)}>ADD MOVIE </button>
    </div> );
}

const mapDispatchToProps =(dispatch)=> {
    return {
        ChangeName :(name)=> dispatch({type:"SET_NAME",payload:name}),
        ChangeRating :(name)=> dispatch({type:"SET_RATING",payload:name}),
        ChangeImg :(name)=> dispatch({type:"SET_IMG",payload:name}) , 
        ChangeDescription :(name)=> dispatch({type:"SET_DESC",payload:name}) , 
        add :(newMovie)=>dispatch({type:"ADD_MOVIE",payload:newMovie})
        
    }
}

const mapStateToProps=(state)=> {
    return  {
        name :state.name , 
        img : state.img , 
        rating :state.rating, 
        display: state.display, 
        description : state.description
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(AddMovie);