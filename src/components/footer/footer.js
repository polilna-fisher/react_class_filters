import './footer.css'
import { Component } from "react";
import beans_logo_black from './beans_logo_black.svg'
import NavigationLink from "../navigation/navigation_link/navigation_link";
import logo from './footer_logo.svg'


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='footer_section'>
                <div className='container'>
                    <div className='footer_inner_container'>
                        <div className='nav_footer_container'>
                            <img alt='logo' src={logo}/>
                            <NavigationLink text={'Coffee house'} black_theme={true}/>
                            <NavigationLink text={'Our coffee'} black_theme={true}/>
                            <NavigationLink text={'For your pleasure'} black_theme={true}/>
                        </div>
                        <img alt='beans_img' src={beans_logo_black} className='footer_img'/>
                    </div>
                </div>
            </div>
        )
    }

}
export default Footer