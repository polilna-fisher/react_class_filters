import './about_our_beans.css'
import { Component } from "react";
import img from './about_our_beans_img.png'
import beans from './beans_logo_black.svg'

class AboutOurBeans extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='about_our_beans_section'>
                <div className='about_our_beans_container'>
                    <div className='about_our_beans_img_container'>
                        <img alt='img' src={img} className='about_our_beans_img'/>
                    </div>
                    <div className='about_our_beans_content_container'>
                        <h2 className='about_our_beans_title'>About our beans</h2>
                        <img alt='img_beans' src={beans} className=''/>
                        <p className='about_our_beans_text'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p className='about_our_beans_text'>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutOurBeans