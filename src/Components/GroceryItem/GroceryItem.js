import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GroceryItem extends Component {
    state = {
        checked: false
    };

    render() {
        const {item} = this.props;

        return (
            <li>
                {item}
            </li>
        )
    }
}

GroceryItem.propTypes = {
    item: PropTypes.string.isRequired,
};

export default GroceryItem;