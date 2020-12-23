import React, { Component } from 'react'
import axios from 'axios'


import Info from './Info'

class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            chardetails: []
             
        }
    }
    componentDidMount(){
        const url = `https://www.breakingbadapi.com/api/characters/${this.props.match.params.id}`
        axios.get(url).then(
            response => {
                this.setState({
                    chardetails:response.data
                })
         
            }
        )
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        var  details  = this.state.chardetails
        return (
            <div>
                <div className="row ">
                    
                {
                details.length ?
               
                details.map(detail => <Info key={detail.char_id} property={detail} />) :
                null
               
    }
               
                
            </div>
            </div>
        )
    }
}

export default Details
