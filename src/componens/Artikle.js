import React, {Component} from 'react';

export default class Artikle extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
        this.handlClick = this.handlClick.bind(this)
    }
    handlClick() {
        console.log('++')
        this.setState({
            isOpen: !this.state.isOpen
        })
        
    }
    

    render(){
        const {artikles} = this.props
        console.log(this.props);
    const body = this.state.isOpen && <section>{artikles.text}</section>
        return(
            <div className ="card">
                <div className="card-header">
            <h2>{artikles.title}
        <button className="btn float-right" onClick = {this.handlClick} >{this.state.isOpen ? 'close':'open'}</button></h2>
        </div>
        <div className="card-body">
        <div>{body}</div></div>
            </div>
        )
    }
    
}


