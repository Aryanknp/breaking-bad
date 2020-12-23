import React from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'

const Character = (props) =>
    {
        const url = { 
            pathname: `/Details/ ${props.property.char_id}`, 
          };
        return(
            <div className="col-md-3 col-sm-6">
            <div className="character-grid">
                <div className="character-image">
                    <a >
                        <img className="pic-1" src={props.property.img}/>

                    </a>
                    <ul className="social">
                        <li>Name: {props.property.name}</li>
                        <li>Occupation: {props.property.occupation[0]} </li>
                        <li>Status: {props.property.status}</li>
                        <li>Birthday: {props.property.birthday}</li>
                       <Link to={url}>View Detail</Link>

                    </ul>
                 
                </div>
                </div>
        </div>


        )

    }


export default Character
