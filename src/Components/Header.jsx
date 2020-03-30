import React from 'react';
import {connect} from 'react-redux'
const Header = (props) => {
    return (<div>
       <input type="text" onChange={(e)=>props.Search(e.target.value)}/>
       <span onClick={()=>props.SearchStar(1)}>⭐</span>
       <span onClick={()=>props.SearchStar(2)}>⭐</span>
       <span onClick={()=>props.SearchStar(3)}>⭐</span>
       <span onClick={()=>props.SearchStar(4)}>⭐</span>
       <span onClick={()=>props.SearchStar(5)}>⭐</span>
      
     
    </div> );
}

const mapDispatchToProps=(dispatch)=> {
    return{
     Search:(search)=>dispatch({type:"SEARCH",payload:search}) , 
     SearchStar:(star)=> dispatch ({type:"SEARCH_STAR",payload:star})
    }
}
 
export default connect(null,mapDispatchToProps)(Header);