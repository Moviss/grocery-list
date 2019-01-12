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
        const newGroceryList = [...groceryList];
        newGroceryList.push(itemDraft);
        this.setState( {
            groceryList: newGroceryList,
            itemDraft: '',
            }
        )
    };

    render() {
        const { groceryList, itemDraft } = this.state;
        return (
            <div className="container">
                <div>
                    <h1 className="title">Grocery List</h1>
                </div>
                <ul>
                    { groceryList.map( (groceryItem, index) => <GroceryItem key={index} id={index} item={groceryItem} />
                    )}
                </ul>
                <input type="text" value={itemDraft} onChange={this.updateDraft}/>
                <button onClick={this.addItem}>Add</button>
            </div>

        )
    }
}