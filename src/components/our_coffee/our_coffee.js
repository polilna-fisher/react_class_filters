import './our_coffee.css'
import { Component } from "react";
import Navigation from "../navigation/navigation";


class OurCoffee extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='our_coffee_section'>
                <div className='container'>
                    <div className='navigation_inner_container'>
                        <Navigation/>
                    </div>
                    <h2 className='our_coffee_title'>Our Coffee</h2>
                </div>
            </div>
        )
    }

}
export default OurCoffee