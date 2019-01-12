import React, {Component} from 'react';
import 'normalize.css';
import './App.scss';

import GroceryList from './Components/GroceryList/GroceryList';

class App extends Component {
    render() {
        return (
            <div>
                <GroceryList/>
            </div>
        );
    }
}

export default App;
