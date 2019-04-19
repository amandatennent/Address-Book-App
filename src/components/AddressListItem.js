/* TODO: Update anchors to buttons */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import mapPointer from '../images/mappointer.svg';

const AddressListItem = props => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">
                <img src={mapPointer} alt="Map Pointer" />
                <span className="pl-2">{props.name}</span>
            </a>
        </li>
    );
};

AddressListItem.propTypes = {
    name: PropTypes.string,
};

export default AddressListItem;
