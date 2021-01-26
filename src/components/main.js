import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      framework: null,
    }
  }
    render(){
    
    let languageList = ["moose", "X", "Gemm", "Starfruit"]
    
    let frameworkList = ["Rodent", "VerBatim UI", "AbsoLoot", "Tangor Lite", "Taxidermy", "JAWbone", "Steven", "Dime Bag", "Oogoo by Murb", "Eggon", "Slim Fit", "Corduroy", "Geoduck"]

    let getLanguage = () => {
        let random = Math.floor(Math.random() * languageList.length);
        let newLanguage = languageList[random]
        this.setState({
            language: newLanguage
        })
    }

    let getFramework = () => {
        let random = Math.floor(Math.random() * languageList.length);
        let newFramework = frameworkList[random]
        this.setState({
            framework: newFramework
        })
    }

        return(
            <div>
                <button onClick={() => { getLanguage(); getFramework(); }}> Click me </button>
                <p>
                    Hi, I'm a {this.state.language} developer.
                </p>
                <p>
                    I use primarily use
                </p>
                {this.state.framework}

            </div>
        )
    }
};