import React from 'react'
import Header from '../components/Header'

export default class CommunityDetai extends React.Component {
    constructor(props){
     super(props);
     const id = props.match.params.id;
     this.state = {
         
         id,
         
     }
    
 }

 render(){

 
    return (
        <h4>
          <div id="comImageHolder"></div>
        <Header title="San Juan,PR" subTitle="" styleClass="communityHeader">
        <div className="box">
           {this.state.id}
            </div>
        </Header>
       
        </h4>


    )
 }
}
