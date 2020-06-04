import React from "react";
import './Main.css';
import Button from "./Button/Button";

class DadJoke extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joke: ""
        };
    }

    componentDidMount() {
        this.getDadJoke();
    }

    getDadJoke = () => {
        fetch("https://icanhazdadjoke.com", {
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({
                        joke: data.joke
                    })}
            )
    };

    render() {
        return (
            <div>
                <div className="main">
                    <h2> Dad Joke:</h2>
                    <h3>{this.state.joke}</h3>
                </div>,
                <div>
                    <Button newJoke={ this.getDadJoke }/>
                </div>
            </div>
        );
    }
}

export default DadJoke;

