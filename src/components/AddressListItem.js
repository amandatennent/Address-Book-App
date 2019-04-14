/* TODO: Update anchors to buttons */
/* eslint-disable jsx-a11y/anchor-is-valid */

import mapPointer from '../images/mappointer.svg';
import React from 'react';
import PropTypes from 'prop-types';

class AddressListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string
    }

    render() {
        return(
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={mapPointer} alt="Map Pointer" />
                    {this.props.name}
                </a>
        </li>
        );
    }
}

export default AddressListItem;
