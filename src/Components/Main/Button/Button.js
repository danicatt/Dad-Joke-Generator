import React, {useState} from "react";
import "./Button.css"


class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <button onClick={this.props.newJoke}>New Joke</button>
            </div>
        )
    }

    ButtonClick = (props) => {
        const [count, setCount] = useState(0)
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        )
    };
}

export default Button;



