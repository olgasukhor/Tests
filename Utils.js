import React from 'react';
import './App.css';
 class FetchPosts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded:true,
                    items:result
                });
            } ,
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
            )
    }
    render (){
const{error, isLoaded,items}=this.state;
if (error){
    return <p>Error{error.message}</p>
}else if(!isLoaded){
    return <p>Loading</p>
}
else{
    return(
        <ul>
            {items.map(item=>(
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    
                </li>
            ))}
        </ul>
    )
}
    }
}
export default FetchPosts;