
import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";

export default function Home() {
  
  
  
    return (
        <>
         
            <Header title="coast guard" subTitle="Coasties helping Coasties">
            <div className="box">
            <div id="imageHolder"></div>
            </div>
                <Link to="communities" className="text-uppercase btn btn-secondary btn-large mt-3">Go to Communities</Link>
            </Header>

            <div>
            
            </div>
            
            </>


        // <div>
        //      <Banner
        //   title="coasties helping coasties"
        //   subtitle="learn more"
        // >
        //   <Link to="/community" className="btn-primary">
        //     Communities
        //   </Link>
        // </Banner>
      
        //</div>
    )
  
}

