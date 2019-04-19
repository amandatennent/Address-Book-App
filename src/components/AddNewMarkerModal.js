/* eslint-disable no-undef */
import React from 'react';

class AddNewMarkerModal extends React.Component {
    componentDidMount() {
        console.info('Running compononent did mount on AddNewMarkerModal');
        // const input = document.getElementById('address');

        // if (!input) return;
    }

    render() {
        return (
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add a new address
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <label htmlFor="address">
                                    Address
                                    <input
                                        className="input-group mb-3"
                                        type="text"
                                        id="address"
                                        name="location[address]"
                                        placeholder="Enter a location"
                                    />
                                </label>
                                <label htmlFor="lng">
                                    Address Longitude
                                    <input
                                        className="input-group mb-3"
                                        type="text"
                                        id="lng"
                                        name="location[coordinates][0]"
                                    />
                                </label>
                                <label htmlFor="lat">
                                    Address Latitude
                                    <input
                                        className="input-group mb-3"
                                        type="text"
                                        id="lat"
                                        name="location[coordinates][0]"
                                    />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewMarkerModal;
