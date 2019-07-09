import React, { Component } from 'react';
import Community from './Community'

export default class CommunityList extends Component {
    
    

    render() {
       
        const { communities } = this.props;
        console.log("render")
        console.log(communities)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h4 className="text-slanted pageTitle">
                            CG Communities
                        </h4>
                    </div>
                </div>
                <div className="row">
                    {communities.map(community => (<Community key={community.communityId} community={community}></Community>))}
                </div>
                
            </div>
        )
    }
}
