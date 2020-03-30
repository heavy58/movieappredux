import React from 'react';
import {connect} from 'react-redux'
import { Link} from "react-router-dom";

const MovieList = (props) => {
    return ( <div style ={{display:"flex"}}>    
              <h2 onClick={props.display}>+</h2>  
             {props.MovieList.filter(el=>el.title.includes(props.search.trim())&&el.rating<props.star).map((el,i)=><div style={{display:"flex",flexDirection:"column",width:"20%",margin:"10px"}} key={i}>
                <span>{"".padEnd(el.rating,"⭐")}</span>
                <img src={el.img} alt="aa"/>
                <span>{el.title}</span>
                <button onClick={()=>props.delete(el.id)}>DELETE</button>
                <button onClick ={()=>props.Edit(el.id)}>EDIT</button>
                <Link to = {`/Description/${el.id}`}>
                  See Description
                </Link>
             </div>)}
         
    </div>);
}

const mapStateToProps=(state)=> {
    return {
        MovieList : state.MovieList,
        search : state.search , 
        star :state.star
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        display : ()=> dispatch({type:"DISPLAY"}), 
        delete:(id)=> dispatch({type:"DELETE",payload:id}), 
        Edit :(id)=> dispatch({
            type: "EDIT", 
            payload : {
                title:prompt("title")  , 
                rating :prompt("rating"), 
                img :prompt("img") ,
                description :prompt("description") ,
                id : id
            }
        })
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);