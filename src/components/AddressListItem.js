/* TODO: Update anchors to buttons */
/* eslint-disable jsx-a11y/anchor-is-valid */

import mapPointer from '../images/mappointer.svg';
import React from 'react';

class AddressListItem extends React.Component {
    render() {
        return(
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={mapPointer} alt="Map Pointer" />
                    Orders
                </a>
        </li>
        );
    }
}

export default AddressListItem;
