


import React, { Component } from 'react'
import './Styles.css'
import axios from 'axios'


class Info extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             quotes:[]
        }
      
    }
    componentDidMount(){
        const url = `https://www.breakingbadapi.com/api/quote?author=${this.props.property.name}`
            axios.get(url).then(
                response => {
                    this.setState({
                        quotes:response.data
                    })
               
                }
            )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const  quotes  = this.state.quotes
        return (
           
                <React.Fragment>
        <div  className="col-md-3 col-sm-6 characterinfo">
                <img src={this.props.property.img} className="rounded-circle" alt="Cinque Terre"/>
                <p>Name:{this.props.property.name}</p>
                            <p>Birthday:{this.props.property.birthday}</p>
                            <p>Occupation:{this.props.property.occupation[0]}</p>
                            <p>Status:{this.props.property.status}</p>
                            <p>Nickname:{this.props.property.nickname}</p>
                        
                    </div>
                    <div className="col-md-9 col-sm-6 characterdetail">
                    <p>Actor Name:{this.props.property.portrayed}</p>
                    {
                this.props.property.appearance ?
                    <p>Seasons Appeared :{this.props.property.appearance.join(",")}</p>:null
    }
                    <p>Quotes:</p>
<ul>
                    {
                quotes.length ?
               
                quotes.map(quotejson =>  <li key={quotejson.quote_id}>{quotejson.quote}</li>) :
                <p>No Quotes found!</p>
               
    }
    </ul>
                        
                           
                    </div>
                    </React.Fragment>
           
        )
    }
}

export default Info






