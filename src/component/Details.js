import React, { Component } from 'react'
import axios from 'axios';
export default class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            details:""        
        }
    }
    componentDidMount()
    {           
        console.log(this.props.match);
        let id =  this.props.match.params.id;
             axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(
                function(response){              
                 this.setState({details:response.data})
                 console.log(this.state.details);
                }.bind(this))
    }
    render() {
        
        return (
            <div>
                <h1>{this.state.details.title}</h1>
            </div>
        )
    }
}
