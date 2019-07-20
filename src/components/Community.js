import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export default class Community extends Component {
    state = {
            communityId: this.props.community.communityId
        }
    onClick = () => {
            console.log("clicked " + this.state.communityId)
        }
    render() {
        const { imageUrl, title, communityId } = this.props.community;
        console.log(this.props);
        
       
        return (
            
            
                    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                        <div className="card" style={{height: '100%'}}>
                            <img src={imageUrl} alt={title} style={{height: '14rem'}}/>
                            <div className="card-body text-capitalize">
                                <h6>{title}</h6>
                                
                            </div>
                            <div className="card-footer" onClick={this.onClick} >
                                <Link to={`/communities/${this.state.communityId}`} className="btn btn-primary text-capitalize">{title}</Link>
                               
                            </div>
                        </div>

                    </div>
             
        )
    }

    
}
