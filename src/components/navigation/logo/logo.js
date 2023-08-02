import {Component} from "react";
import logo from './logo.svg'

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img alt='logo' src={logo} className='logo' />
            </div>


        )
    }
}
export default Logo