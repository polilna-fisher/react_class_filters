import './coffee_item.css'
import { Component } from "react";


class CoffeeItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div className='coffee_item_container' style={this.props.background ? {background: 'rgba(255, 255, 255, 0.66)'} : {boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}>
                <img alt='coffee_img' src={this.props.photo} className='item_img' />
                <h3 className='good_name'>{this.props.name}</h3>
                <h3 className='good_name'>{this.props.country}</h3>
                <h3 className='good_price'>{this.props.price}</h3>

            </div>
        )
    }

}
export default CoffeeItem