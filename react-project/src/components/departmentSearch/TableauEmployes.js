import React,{Component} from "react";

const employesList = [
  { id: 1, nom: "Alaoui", prenom: "Tarik", departement: "IT" },
  { id: 2, nom: "Benali", prenom: "Sara", departement: "RH" },
  { id: 3, nom: "Chraibi", prenom: "Amine", departement: "IT" },
  { id: 4, nom: "Daoudi", prenom: "Meryem", departement: "Finance" },
  { id: 5, nom: "El Fassi", prenom: "Karim", departement: "RH" },
  { id: 6, nom: "Farah", prenom: "Nadia", departement: "IT" }
];
export default class Tableau extends Component {
    render(){
        const list = employesList.filter((item)=>item.departement.toUpperCase() === this.props.ID.toUpperCase());
        return (
            <div style={{border : '1px black dotted' , }}>
                <h1>
                    <br/> Département recherché : 
                </h1>
                <h2 style= {{color: "red"}}>
                    Composant TableauEmployes
                </h2>
                {list.map((item)=> 
                <li key={item.nom}>
                    {item.nom} {item.prenom} - {item.departement}
                </li>)}
            </div>
        )
    }
}