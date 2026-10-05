import React, {Component} from "react";
import Filtre from "./FiltreDepartement";
import Tableau from "./TableauEmployes";


export default class App extends Component {
    constructor(){
        super()
        this.state = {ID: ""}
    }
    render(){
        return(
            <div>
                <h1>
                    Composant App
                </h1>
                <Filtre ID = {this.state.ID} OnchangeId ={(e)=> this.setState({ID : e})}/>
                   
                <Tableau ID={this.state.ID}/>
            </div>
        )
    }
}


