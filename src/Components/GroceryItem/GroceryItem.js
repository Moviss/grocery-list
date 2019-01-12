import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            <div onClick={this.checkHandler}>
                <input type="checkbox" id={id} name={item} checked={checked} />
                <label>{item}</label>
            </div>
        )
    }
}

GroceryItem.propTypes = {
    item: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
};

export default GroceryItem;