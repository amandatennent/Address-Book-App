import React from 'react';
import PropTypes from 'prop-types';
import AddressListItem from './AddressListItem';
import addIcon from '../images/add.svg';

const AddressList = props => {
    return (
        <nav className="bg-light sidebar sidebar-sticky d-block h-100 col-md-3">
            <ul className="nav flex-column">
                <li>
                    {/* <a className="nav-link" href="#">
                            <img src={addIcon} alt='Add Icon' />
                            <span className="pl-2">Add a new marker</span>
                        </a> */}
                    <button
                        type="button"
                        className="btn btn-link"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        {/* Launch demo modal */}
                        <img src={addIcon} alt="Add Icon" />
                        <span className="pl-2">Add a new marker</span>
                    </button>
                </li>
                {Object.keys(props.markers).map(key => (
                    <AddressListItem
                        key={key}
                        index={key}
                        name={props.markers[key].name}
                    />
                ))}
            </ul>
        </nav>
    );
};

AddressList.propTypes = {
    markers: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.object,
    }),
};

export default AddressList;
