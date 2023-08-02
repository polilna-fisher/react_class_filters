import './about_us.css'
import { Component } from "react";
import beans_logo_black from './beans_logo_black.svg'


class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='section'>
                <div className='about_us_container'>
                    <h2 className='title_section'>About Us</h2>
                    <div className='central_img'>
                        <img alt='beans' src={beans_logo_black} className='img_beans'/>
                    </div>
                    <p className='text'>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className='text'>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>
        )
    }

}
export default AboutUs