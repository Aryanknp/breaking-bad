import React, { Component } from 'react'
import axios from 'axios'
import Character from './Character'
import Pagination from './Pagination'



export class Characters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             characters: [],
             max: 0,
        }
    }
    filterdata = (child) =>{
        this.setState({
            max:child
        })

    }

   
   
    componentDidMount(){
        
        axios.get('https://www.breakingbadapi.com/api/characters').then(
            response => {
                this.setState({
                    characters:response.data,
                    max:10
                })

            }
        )
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        var  characters  = this.state.characters
        const  max  = this.state.max
  
        
        let   baseten = max-10
     
        if(max <= characters.length){
           characters = characters.slice(baseten,max)
        }
        else{
            characters = characters.slice(baseten,characters.length)
        }
     
        return (
            <div>
                <h2>Characters</h2>
                <div className="row">
                {
                characters.length ?
               
                characters.map(character => <Character key={character.char_id} property={character} />) :
                null
               
    }

    </div>
    <Pagination pages={Math.ceil(this.state.characters.length/10)} filter={this.filterdata} />
            </div>
        )
    }
}

export default Characters
