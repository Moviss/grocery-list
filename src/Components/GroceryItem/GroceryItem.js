import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GroceryItem.scss';
import bin from './recycleBin.svg';

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
        const {item, id} = this.props;

        return (
            <div className={`singleItem ${checked ? 'checked' : ''}`} onClick={this.checkHandler}>
                <input type="checkbox" id={id} name={item} checked={checked} />
                <label>{item}</label>
                <img src={bin} alt="Bin"/>
            </div>
        )
    }
}

GroceryItem.propTypes = {
    item: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
};

export default GroceryItem;