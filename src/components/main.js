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
    
    let languageList = ["MOOSE", "EX", "Gemm", "Starfruit", "Oink", "Z+", "HotChocScript", "Crocodile#", "Gouda On Rails", 
        "obvious", "CON", "smoov", "wicker2basic" ]
    
    let frameworkList = ["Zungle", "VaVaVoom", "Rodent", "VerBatim UI", "AbsoLoot", "Tangor Lite", 
        "Taxidermy", "JAWbone", "Steven", "Dime Bag", "Oogoo by Murb", "Eggon", "Slim Fit", "Corduroy", "Geoduck",
        "Cherry Cheesecake", "Comte", "Orkhestra", "Hippogriff Lite", "JChimera", "DonQuoté", "LTNGBUG basic", "wicker2 JIB", "LATERAL", "parboil"]

    let libraries = ["AtomsFere", "faULT", "kQuestion", "Cilantro", "Cilantro Chopped", "quiver"]

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
                <button onClick={() => { getLanguage(); getFramework(); }}> Give me a script! </button>
                <p>
                    Hi, I'm a {this.state.language} developer.
                </p>
                <p>
                    I work in
                </p>
                {this.state.framework}

            </div>
        )
    }
};