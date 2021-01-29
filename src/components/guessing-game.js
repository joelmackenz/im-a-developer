import React from "react";

export default class GuessingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: null,
      toggle: true
    }
  }
    render(){

    let realFrameworkList = ["Pycnic", "Watson", "TurboGears", "Web2py", "Flask", "Bottle", "CherryPy", "Sanic", "Tornado", 
        "Hug", "aiohttp", "Growler", "Morepath", "Falcon", "Reahl", "Eve", "ButterfylNet", "Vue", "Ember", "Meteor", "Mithril", 
        "Polymer", "Aurelia", "Svelte", "facil", "Qt", "Boost", "KDE", "GNOME", "TurboVision","Grape","Sinatra", "Camping", "Hanami",
        "Ramaze", "NYNY", "Volt", "Cramp", "Ramverk", "Delayed::Job", "Sidekiq", "SuckerPunch", "Trailbrazer", "Nancy", "Scorched", "Spring",
        "Cuba", "Shiny", "Hibernate", "Struts", "Grails", "Vaadin", "Blade", "Dropwizard", "Play", "Stripes", "Flexive", "Lift", "Grok", "Seaside",
        "ColdBox", "PRADO", "Snap", "Pistache", "Quixote", "Blade", "gin", "beego", "echo", "kit"]

    let fakeFrameworkList = ["dmPYls", "NuJersy", "rttUI", "Padrino", "Vynil", "Zephr", "Plumb", "Snyde", "SHRP", "commandR", "Elevate",
        "Rapier", "Boing", "JAWbone", "Ladel", "Orchestra", "Hippogriff Lite", "Coriander", "Warp", "Necklace", "PERL Shell", "run", "Lite", "Katana", 
        "bold.", "Zork", "Yes", "Tonic", "sly", "wait~work", "Hurricane", "Glue", "Compte", "Velvet", "Maskr", "hippGO", "Light", "IcePick", "Borealis", "IceRoad",
        "Yum!", "Hook", "Bounce", "OrC+", "Edison", "Labarynth", "CreamJS", "Lure", "NS", "LRG" ]

    let getFramework = () => {
        let completeFrameworkList = realFrameworkList.concat(fakeFrameworkList)
        let random = Math.floor(Math.random() * completeFrameworkList.length);
        let newFramework = completeFrameworkList[random]
        this.setState({
            framework: newFramework
        })
    }

    function toggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

        function UserGreeting() {
            return <h1>Welcome back!</h1>;
        }

        function GuestGreeting() {
            return <h1>Please sign up.</h1>;
        }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {    
            return <UserGreeting />;  }  
            return <GuestGreeting />;}



        return(
            <div>
                <button onClick={() => { getFramework(), toggle() }}> New Framework </button>
                <p>
                    {this.state.framework}
                </p>
                <Greeting isLoggedIn={false} />;
            </div>
        )
    }
};