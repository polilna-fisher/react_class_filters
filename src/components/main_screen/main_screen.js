import './main_screen.css'
import { Component } from "react";
import Button from "../button/button";
import Navigation from "../navigation/navigation";
import beans_logo_white from './beans_logo.svg'

class MainScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='main_section'>
                <div className='container'>
                    <Navigation/>
                    <h1 className='title'>
                        Everything You Love About Coffee
                    </h1>
                    <div className='beans'>
                        <img alt='beans_logo' src={beans_logo_white} className='img_beans' />
                    </div>
                    <h3 className='subtitle'>
                        We makes every day full of energy and taste
                    </h3>
                    <h3 className='subtitle'>
                        Want to try our beans?
                    </h3 >
                    <div className='button_container'>
                        <Button/>
                    </div>
                </div>



            </div>
        )
    }

}
export default MainScreen