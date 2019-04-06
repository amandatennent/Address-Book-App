import React from 'react';
import AddressListItem from './AddressListItem'

class AddressList extends React.Component {
    render() {
        return (
            <nav className="bg-light sidebar sidebar-sticky d-block h-100 col-md-3">
                <ul className="nav flex-column">
                    <AddressListItem />
                </ul>
            </nav>
        );
    }
}

export default AddressList;
