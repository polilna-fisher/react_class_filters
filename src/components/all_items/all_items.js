import './all_items.css'
import { Component } from "react";
import aroma from '../items_photos/AROMISTICO Coffee 1 kg.png'
import CoffeeItem from "../coffee_item/coffee_item";
import button from "../button/button";


class AllItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', photo: aroma, background: false},
                {name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '7.99$', photo: aroma, background: false},
                {name: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: '8.99$', photo: aroma, background: false},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', photo: aroma, background: false},
                {name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '7.99$', photo: aroma, background: false},
                {name: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: '8.99$', photo: aroma, background: false},
            ],
            search: '',
            currentButton: []
        }
    }

    onInputSubmit = (e) => {
        this.setState({ search: e.target.value })
    }

    filteredData = (items, filter) => {
        return items.filter(item => {
            return item.name.toLowerCase().includes(filter.toLowerCase())
        })
    }


    onButtonClick = (name) => {
        let filters = this.state.currentButton
        if (filters.includes(name)) {
            this.setState({currentButton: filters.filter(item => {
                return item !== name
                })})
        } else {
            filters.push(name)
            this.setState({currentButton: filters})
        }

        // this.setState({
        //     currentButton:
        //         name === this.state.currentButton
        //             ? ''
        //             : name
        // })

        // this.setState((prevState) => {
        //     if(name === prevState.currentButton) {
        //         return ({currentButton: ''})
        //     }
        //
        //     return ({currentButton: name})
        // })
    }

    buttonFilter = (data, button) => {
        console.log(data, 'data')
        console.log(button, 'buttonInState')
        if(this.state.currentButton.length === 0){
            return data
        }
        else{
            return data.filter(item => {
                return button.includes(item.country)
            })
        }
    }



    render() {
        const {data, search, currentButton} = this.state
        const afterFilterData = this.filteredData(data, search)
        const renderData = this.buttonFilter(afterFilterData, currentButton)

        const buttonData = [
            {name: 'Brazil', className: 'panel_button', label: 'Brazil'},
            {name: 'Kenya', className: 'panel_button', label: 'Kenya'},
            {name: 'Columbia', className: 'panel_button', label: 'Columbia'},
        ]
        return(
            <div className='all_items_section'>
                <div className='all_items_container'>
                    <div className='filter_inner_container'>
                        <div className='searching_panel'>
                            <h3 className='panel_name'>
                                Looking for
                            </h3>
                            <input  type='text' placeholder='start typing here...'
                                    className='panel_input'
                                    value={search}
                                    onChange={this.onInputSubmit}/>
                        </div>
                        <div className='filter_panel'>
                            <h3 className='panel_name'>
                                Or filter
                            </h3>
                            {
                                buttonData.map((item, index) => {
                                    const isClicked = this.state.currentButton.includes(item.name)

                                    return <button key={index} onClick={() => {
                                        this.onButtonClick(item.name)
                                    }} name={item.name} className={isClicked ? item.className + ' filter_on' : item.className} >{item.label}</button>
                                })
                            }
                        </div>
                    </div>
                    <div className='items_container'>
                        {
                            renderData.map(item => {
                                return <CoffeeItem photo={item.photo} name={item.name} country={item.country} price={item.price} background={item.background} key={Math.random()}/>
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }

}
export default AllItems