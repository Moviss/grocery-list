import React, {Component} from 'react';

export default class GroceryList extends Component {
    state = {
        groceryList: ['Zimniaki', 'Habanina', 'Stek'],
    };

    render() {
        const { groceryList } = this.state;
        return (
            <ul>
                { groceryList.map( (groceryItem, index) => <li key={index}>{ groceryItem }</li>
                )}
            </ul>
        )
    }
}