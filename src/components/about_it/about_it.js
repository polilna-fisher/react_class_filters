import './about_it.css'
import { Component } from "react";
import img from './about_it_img.jpg'
import beans from './beans_logo_black.svg'

class AboutIt extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='about_our_beans_section'>
                <div className='about_our_beans_container'>
                    <div className='about_our_beans_img_container'>
                        <img alt='img' src={img} className='about_it_img'/>
                    </div>
                    <div className='about_it_content_container'>
                        <h2 className='about_our_beans_title'>About it</h2>
                        <img alt='img_beans' src={beans} className=''/>
                        <p className='about_it_text'>
                            <span className='about_it_text_bold'>Country:</span>  Brasil
                        </p>
                        <p className='about_it_text'>
                            <span className='about_it_text_bold'>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className='about_it_text'>
                            <span className='about_it_text_bold'>Price:</span>  <span className='about_it_text_price'>16.99$</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default AboutIt