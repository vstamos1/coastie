
import React, {Component} from 'react';
import Header from '../components/Header';
import CommunityList from '../components/CommunityList';


export default class Communities extends Component {

    constructor(props){
        super(props)
        this.getCommunities = this.getCommunities.bind(this);
    }

    array = [{title: "RBH", imageUrl: 'localhost:3000/src/images/RBH.png',communityId: "121212" }, {title: "Lawn Maintenance", imageUrl: "bbbbb",communityId: "121444" }, {title: "Baby Sitting", imageUrl: "ccccc",communityId: "1266666" }];
    state = {
        communityData: this.array,
        search:'',
        query: '&q=',
        error: ''
    };

    // async getRecipes(){
    //     try{
            
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();

    //         if (jsonData.recipes.length === 0 ){
    //             this.setState({
    //                 error: "Sorry... No results for your search. Try agian or press search for the most popular recipes."
    //             })
    //         }else{
    //             this.setState({
    //             recipes: jsonData.recipes,
    //             error: ''
    //         })
    //         }
            
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    getCommunities(){
        
            
            const data = this.state.communityData;
            const jsonData = data; //await data.json();

            if (jsonData.recipes.length === 0 ){
                this.setState({
                    error: "Sorry... No results for your search. Try agian or press search for the most popular recipes."
                })
            }else{
                this.setState({
                recipes: jsonData.communities,
                error: ''
            })
            }
            
    }

    handleChange = (e) =>{
        this.setState({
            search:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();   
        const { baseUrl, query, search}  = this.state;
        this.setState({
            url: `${baseUrl}${query}${search}`,
            search: ''
        }, () => this.getCommunities());
    }

    
    render() {
    
        return (
            <>
       

        {this.state.error ? (<section><div className="row"><div className="col"><h2 className="orangeText text-center text-uppercase mt-5">
            {this.state.error}
        </h2></div></div></section>) : (<CommunityList communities={this.state.communityData}/>)}

            {console.log(this.state.communityData)}
        </>
        )
    }
}


