import React from 'react';
import Artikle from './Artikle.js';

export default function ArtikleList({data}){
    const artikleRender = data.map(artikle =>
         <li key = {artikle.id}><Artikle artikles = {artikle}/></li>)
    return(
        <ul  className="list-unstyled">
            {artikleRender}
        </ul>
    )

}