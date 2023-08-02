import './our_best.css'
import { Component } from "react";
import solimo from '../items_photos/Solimo Coffee Beans 2 kg.png'
import presto from '../items_photos/Presto Coffee Beans 1 kg.png'
import aromistico from '../items_photos/AROMISTICO Coffee 1 kg.png'
import CoffeeItem from "../coffee_item/coffee_item";



class OurBest extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='our_best_section'>
                <div className='our_best_container'>
                    <h2 className='title_section'>Our Best</h2>
                    <div className='cards_container'>
                        <CoffeeItem photo={solimo} name='Solimo Coffee Beans 2 kg' price='10.73$' background={true}/>
                        <CoffeeItem photo={presto} name='Presto Coffee Beans 1 kg' price='15.99$' background={true}/>
                        <CoffeeItem photo={aromistico} name='AROMISTICO Coffee 1 kg' price='6.99$' background={true}/>
                    </div>
                </div>
            </div>
        )
    }

}
export default OurBest