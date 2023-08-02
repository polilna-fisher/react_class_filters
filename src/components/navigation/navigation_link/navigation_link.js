import {Component} from "react";
import './navigation_link.css'

class NavigationLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a className='nav_link' style={this.props.black_theme ? {color: '#000000'} : {color: '#FFFF'}}>{this.props.text}</a>
        )
    }
}
export default NavigationLink