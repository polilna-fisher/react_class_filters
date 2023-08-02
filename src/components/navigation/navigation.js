import {Component} from "react";
import NavigationLink from "./navigation_link/navigation_link";
import Logo from "./logo/logo";
import './navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='nav_container'>
                <Logo/>
                <NavigationLink text={'Coffee house'} black_theme={false}/>
                <NavigationLink text={'Our coffee'} black_theme={false}/>
                <NavigationLink text={'For your pleasure'} black_theme={false}/>
            </div>


    )
    }
}
export default Navigation