import './button.css'
import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div>
                <button className='button'>
                    More
                </button>
            </div>
        )
    }

}

export default Button