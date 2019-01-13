import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GroceryItem.scss';
import RecycleBin from '../SVG/RecycleBin';

class GroceryItem extends Component {
    state = {
        checked: false
    };

    checkHandler = () => {
        this.setState({
            checked: !this.state.checked,
        })
    };

    render() {
        const {checked} = this.state;
        const {item, id, deleteItem} = this.props;

        return (
            <div className="singleItem-container">
                <div className={`singleItem ${checked ? 'checked' : ''}`} onClick={this.checkHandler}>
                    <input type="checkbox" id={id} name={item} checked={checked}/>
                    <label>{item}</label>
                </div>
                <p onClick={() => deleteItem(id)}>
                    <RecycleBin/>
                </p>
            </div>

        )
    }
}

GroceryItem.propTypes = {
    item: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    deleteItem: PropTypes.func.isRequired,
};

export default GroceryItem;