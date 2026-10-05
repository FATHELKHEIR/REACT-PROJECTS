import React from 'react'

export default class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "Bien venu visiteur",
            btnMessage: "inscription"
        }
    }

    inscription (){
        this.setState(
            this.state.message === "Bien venu visiteur"
                ?{
                    message: "mysrra",
                    btnMessage: "merci",
                } 
                : {
                    message: "Bien venu visiteur",
                    btnMessage: "inscription",
                }
        )
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>

                <button onClick={()=> this.inscription()}>
                    {this.state.btnMessage}
                </button>
            </div>
        )
    }
}