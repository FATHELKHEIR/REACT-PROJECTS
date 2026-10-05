import React,{Component} from "react";

export default class Filtre extends Component {
    render (){
        return (
            <div style={{border : '1px black dotted'}}>
                <h2 style= {{color: "green"}}>
                    Composant FiltreDepartement
                </h2>
                Entrer le département : 
                <input 
                    type="text"
                    value={this.props.ID} 
                    onChange={(e)=>this.props.OnchangeId(e.target.value)}
                    placeholder="which departement are u looking for?"
                    />
            </div>
        )
    }
}