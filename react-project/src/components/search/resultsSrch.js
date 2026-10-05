import React, {Component} from "react";
 const list=[
{nom:"banane",type:"fruit"},
{nom:"orange",type:"fruit"},
{nom:"pomme",type:"fruit"},
{nom:"raisins",type:"fruit"},
{nom:"kiwi",type:"fruit"},
{nom:"tomate",type:"legume"},
{nom:"carotte",type:"legume"},
{nom:"pomme de terre",type:"legume"},
{nom:"navet",type:"legume"},
{nom:"poivron",type:"legume"}
]

export default class Results extends Component {
    render (){
       
        const fltr = this.props.search.toLowerCase() === "" ? [] : list.filter((item)=> item.type.toLowerCase()===this.props.search.toLowerCase() )
        return(
            <div>
                {fltr.map((item)=><li key={item.nom}>{item.nom}</li>)}
            </div>
        )
    }
    
}