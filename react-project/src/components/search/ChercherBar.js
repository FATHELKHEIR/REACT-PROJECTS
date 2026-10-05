import React, {Component} from "react";

export default class SearchBar extends Component {
    render (){
        return (
            <div>
                <h1>
                    composant SEARCH BAR
                </h1>
                entre le cle de recherche <br/>
                <input type="text" placeholder="LEGUME OU FRUIT" value={this.props.search} onChange={(e)=>this.props .OnChangeSearch(e.target.value)}/>
            </div>
        )
    }
}
