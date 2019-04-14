import React from 'react';
import AddressListItem from './AddressListItem'
import PropTypes from 'prop-types';

class AddressList extends React.Component {
    static propTypes = {
        markers: PropTypes.shape({
            name: PropTypes.string,
            position: PropTypes.object
        }),
    }

    render() {
        return (
            <nav className="bg-light sidebar sidebar-sticky d-block h-100 col-md-3">
                <ul className="nav flex-column">
                {Object.keys(this.props.markers).map(key => (
                    <AddressListItem key={key} index={key} name={this.props.markers[key].name} />
                ))}
                </ul>
            </nav>
        );
    }
}

export default AddressList;
