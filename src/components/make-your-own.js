import React from "react";
import "./make-your-own.css";

export default class MakeYourOwn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: null,
    }
  }
    render(){

    let startingSyllables = ["zun", "go", "nus", "imb", "ogl", "no", "egg", "loco", "amb", "ang"]
    let middleSyllables = ["que", "gu", "el", "ra", " ", "an"]
    let endingSyllables = ["ggle", "ard", "le", "te", "stra", "roy", "my" ]
    let secondName = ["Lite", "MVN", "t", "Flex"]

    let getFramework = () => {
        let newFramework = null
        let randomStarting = Math.floor(Math.random() * startingSyllables.length);
        let randomMiddle = Math.floor(Math.random() * middleSyllables.length)
        let randomEnding = Math.floor(Math.random() * endingSyllables.length);
        let randomSecondName = Math.floor(Math.random() * secondName.length);
        let checkForMiddle = Math.floor(Math.random() * 2);
        let checkForSecondName = Math.floor(Math.random() * 4);
        console.log(checkForSecondName)
        if (checkForMiddle) {
            newFramework = `${startingSyllables[randomStarting]}${middleSyllables[randomMiddle]}${endingSyllables[randomEnding]}`
            } else {
            newFramework = `${startingSyllables[randomStarting]}${endingSyllables[randomEnding]}`
            }
        if (checkForSecondName === 1) {
            newFramework = `${newFramework} ${secondName[randomSecondName]}`
        }
        console.log(newFramework)
        this.setState ({
        framework: newFramework
    })
        
        
    }

        return(
            <div>
                <button onClick={() => { getFramework(); }}>Randomly generated framework name</button>
                <h2 className="random-framework">
                    {this.state.framework}
                </h2>
            </div>
        )
    }
};