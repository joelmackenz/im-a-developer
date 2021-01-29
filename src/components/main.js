import React from "react";
import MakeYourOwn from './make-your-own'
import GuessingGame from './guessing-game'
import './main.css'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      framework: null,
      library: null
    }
  }
    render(){
    
    let languageList = ["MOOSE", "E.X", "Gemm", "Starfruit", "Oink", "Z+", "HotChocScript", "Crocodile#", "Gouda On Rails", 
        "obvious", "CON", "smoov", "wicker2basic", "SNOW",  ]
    
    let frameworkList = ["Zungle", "VaVaVoom", "Rodent", "VerBatim UI", "AbsoLoot", "Tangor Lite", 
        "Taxidermy", "Steven", "Dime Bag", "Oogoo by Murb", "Eggon", "Slim Fit", "Corduroy", "Geoduck",
        "Cherry Cheesecake", "Hippogriff Lite", "JChimera", "DonQuoté", "LTNGBUG basic", "wicker2 JIB", "LATERAL", "parboil", "Weft", "CastOn", "triangle"]

    let libraryList = ["AtmosFere", "faULT", "kQuestion", "Cilantro", "Cilantro Chopped", "Quiver", "Weft", "Buckthorn", "FiddleHead", "LazyDog",
        "HandCream", "HamBone", "Squattle"]

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

    let getLibrary = () => {
        let random = Math.floor(Math.random() * libraryList.length);
        let newLibrary = libraryList[random]
        this.setState({
            library: newLibrary
        })
    }

    let generateName = (generatedFrameworkName) => {
        this.setState({
            framework: generatedFrameworkName
        })
    }

        return(
            <div>
                <button onClick={() => { getLanguage(); getFramework(); getLibrary(); }}> Give me a script! </button>
                <MakeYourOwn onChange={generateName}/>
                <p>
                    Hi, I'm a
                </p>
                <h2 className="variable">{this.state.language}</h2>
                <p>
                    developer.
                </p>
                <br />
                <p>
                    I work in
                </p>
                <h2 className="variable">{this.state.framework}</h2>
                <br />
                <p>
                    and I'm very familiar with the library
                </p>
                <h2 className="variable">{this.state.library}</h2>
                <GuessingGame />
            </div>
        )
    }
};