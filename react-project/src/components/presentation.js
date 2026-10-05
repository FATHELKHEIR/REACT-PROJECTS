import React, { Component } from "react";

export default class Presentation extends Component {
    render() {
        return (
            <div>
                {this.props.children}

                <h4>
                    je suis {this.props.personne.nom} {this.props.personne.prenom}
                </h4>
            </div>
        );
    }
}