import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ArtikleList from './ArtikleList.js';

const data = [{'title':'Text 1','text':'Lorem ipsum — классический текст-Существующий вступительный текст остается вместе с пятью упомянутыми стандартами на оборудование цистерн, к которым этот текст по-прежнему применим.«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.',id:'name 1'},
             {'title':'Text 2','text':'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского тракттируеСуществующий вступительный текст остается вместе с пятью упомянутыми стандартами на оборудование цистерн, к которым этот текст по-прежнему применим.тся Ричарду МакКлинтоку.', id:'name 2'},
            {'title':'text 3','text':'Существующий вступительный текст остается вместе с пятью упомянутыми стандартами на оборудование цистерн, к которым этот текст по-прежнему Существующий вступительный текст остается вместе с пятью упомянутыми стандартами на оборудование цистерн, к которым этот текст по-прежнему применим.применим.', id:'name 3'}]
        

      
   export default class App extends Component {
     constructor(){
       super()
      this.state = {
        
      }
     }

  render(){
     return (
    <div className="container">
      <div className="jumbotron"><h1 className="display-3">App name</h1></div>
     
     <ArtikleList data={data}/>
    </div>
  )
  }
}
 


