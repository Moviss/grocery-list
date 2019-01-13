import React, {Component} from 'react';
import './GroceryList.scss';

import GroceryItem from '../GroceryItem/GroceryItem';

export default class GroceryList extends Component {
    state = {
        groceryList: [],
        itemDraft: '',
    };

    updateDraft = (e) => {
        this.setState({
            itemDraft: e.target.value,
        })
    };

    addItem = () => {
        const {groceryList, itemDraft} = this.state;
        if (itemDraft !== '') {
            const newGroceryList = [...groceryList];
            newGroceryList.push(itemDraft);
            this.setState( {
                    groceryList: newGroceryList,
                    itemDraft: '',
                }
            )
        }
    };

    deleteItem = (index) => {
        const { groceryList } = this.state;
        const newGroceryList = [...groceryList];
        newGroceryList.splice(index, 1);
        this.setState({
            groceryList: newGroceryList,
        })
    };

    render() {
        const { groceryList, itemDraft } = this.state;
        const today = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return (
            <div className="container">
                <div>
                    <h1 className="title">Grocery List</h1>
                </div>
                <div className="date">
                    <em className="date-text">{today.getDate()} of {monthNames[today.getMonth()]}</em>
                </div>
                <div>
                    { groceryList.map( (groceryItem, index) => <GroceryItem key={index} id={index} item={groceryItem} deleteItem={(taskId) => this.deleteItem(taskId)}/>
                    )}
                </div>
                <div className="inputs">
                    <input className="input" placeholder={"What to buy?"} type="text" value={itemDraft} onChange={this.updateDraft}/>
                    <button className="addButton" onClick={this.addItem}>Add</button>
                </div>

            </div>

        )
    }
}