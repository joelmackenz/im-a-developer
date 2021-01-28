import React from "react";
import MakeYourOwn from './make-your-own'
import './main.css'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name
    }
  }
    render(){

    let RealFrameworkList = ["Pycnic", "Watson", "TurboGears", "Web2py", "Flask", "Bottle", "CherryPy", "Sanic", "Tornado", 
        "Hug", "aiohttp", "Growler", "Morepath", "Falcon", "Reahl", "Eve", "ButterfylNet", "Vue", "Ember", "Meteor", "Mithril", 
        "Polymer", "Aurelia", "Svelte", "facil", "Qt", "Boost", "KDE", "GNOME", "TurboVision","Grape","Sinatra", "Camping", "Hanami",
        "Ramaze", "NYNY", "Volt", "Cramp", "Ramverk", "Delayed::Job", "Sidekiq", "SuckerPunch", "Trailbrazer", "Nancy", "Scorched",
        "Cuba"]

    let FakeFrameworkList = ["dmPYls", "NuJersy", "rttUI", "Cuba", "Padrino", "Vynil"]

    let getFramework = () => {
        let random = Math.floor(Math.random() * languageList.length);
        let newFramework = frameworkList[random]
        this.setState({
            framework: newFramework
        })
    }

        return(
            <div>
                <button onClick={() => { getLanguage(); getFramework(); getLibrary(); }}> Give me a script! </button>
                <MakeYourOwn onChange={this.generateName}/>
                <p>
                    I work in
                </p>
                {this.state.framework}
            </div>
        )
    }
};