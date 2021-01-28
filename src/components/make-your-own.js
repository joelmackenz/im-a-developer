import React from "react";
import "./make-your-own.css";

export default class MakeYourOwn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: null,
    }
    this.getFramework = this.getFramework.bind(this)
  }

    startingSyllables = ["zun", "go", "nus", "im", "og", "no", "eg", "loc", "amb", "ang", "fu", "be"]
    middleSyllables = ["que", "gu", "el", "ra", " ", "an"]
    endingSyllables = ["ggle", "ard", "le", "te", "stra", "roy", "my", "n!" ]
    secondName = ["Lite", "MV", "t", "Flex", "Zen", "Lang"]

    getFramework = () => {
    let newFramework = null
    let randomStarting = Math.floor(Math.random() * this.startingSyllables.length);
    let randomMiddle = Math.floor(Math.random() * this.middleSyllables.length)
    let randomEnding = Math.floor(Math.random() * this.endingSyllables.length);
    let randomSecondName = Math.floor(Math.random() * this.secondName.length);
    let checkForMiddle = Math.floor(Math.random() * 2);
    let checkForSecondName = Math.floor(Math.random() * 4);
    let checkForCapitalization = Math.floor(Math.random() * 7);

    if (checkForMiddle) {
        newFramework = `${this.startingSyllables[randomStarting]}${this.middleSyllables[randomMiddle]}${this.endingSyllables[randomEnding]}`
        } else {
        newFramework = `${this.startingSyllables[randomStarting]}${this.endingSyllables[randomEnding]}`
        }

    if (checkForSecondName === 1) {
        newFramework = `${newFramework} ${this.secondName[randomSecondName]}`
    }

    if (checkForCapitalization === 1) {
    
    } else if (checkForCapitalization === 6) {
        const capitalizedName = newFramework.toUpperCase()
        newFramework = capitalizedName
    } else {
    const capitalizedName = newFramework[0].toUpperCase() + newFramework.slice(1)
        newFramework = capitalizedName
        }

    this.setState ({
    framework: newFramework
    })
    
    }

    handleChange() {
        this.props.onChange(this.state.framework)
    }

    render(){
        return(
            <div>
                <button onClick={() => { this.getFramework(); this.handleChange() }}>Randomly generated framework name</button>
            </div>
        )
    }
};