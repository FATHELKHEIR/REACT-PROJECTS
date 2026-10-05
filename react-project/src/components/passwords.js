import { Component } from "react";
import React, {useState} from "react";

export default class Password extends Component {
    constructor(){
        super()
        this.state = {Password : ''}
    }

    render(){
        return (
            <div>
                Entrer votre password : 
                <input type="password" value = {this.state.Password} onChange={(e)=>this.setState({Password :e.target.value})}/>
            </div>
        )
    }
    
}