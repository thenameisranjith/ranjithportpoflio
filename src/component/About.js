import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mydetails:[]
        }
    }
    componentDidMount()
    {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                function(response){ 
                 this.setState({mydetails:response.data.slice(0,15)})
                }.bind(this))
    }
    render() {
        return (
            <div>
                <br/>
                {this.state.mydetails.map(e=>{
                    return(<div  key={e.id}>
                      <Link to={`/about/${e.id}`}>{e.title}</Link>  
                    </div>)
                })}
               
            </div>
        )
    }
}
