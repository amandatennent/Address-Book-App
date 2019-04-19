import React from 'react';

class AddNewMarkerModal extends React.Component {
    preventEnter = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    };

    createMarker = event => {
        event.preventDefault();

        const marker = {
            name: event.target.marker_name.value,
            position: {
                lat: event.target.select_place_lat.value,
                lng: event.target.select_place_lng.value,
            },
        };

        this.props.addNewMarker(marker);
        document.getElementById('add_new_marker_form').reset();
        // eslint-disable-next-line no-undef
        $('#exampleModal').modal('toggle');
    };

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
                        <form
                            id="add_new_marker_form"
                            onSubmit={this.createMarker}
                        >
                            <div className="modal-body">
                                <label
                                    htmlFor="marker_name"
                                    className="input-group mb-3"
                                >
                                    Name
                                    <input
                                        type="text"
                                        name="marker_name"
                                        id="marker_name"
                                        className="input-group mb-3"
                                    />
                                </label>
                                <label
                                    htmlFor="map_address"
                                    className="input-group mb-3"
                                >
                                    Location
                                    <input
                                        type="text"
                                        name="map_address"
                                        id="map_address"
                                        className="input-group mb-3"
                                        onKeyDown={this.preventEnter}
                                    />
                                </label>
                                <input
                                    type="text"
                                    name="select_place_lat"
                                    id="select_place_lat"
                                />
                                <input
                                    type="text"
                                    name="select_place_lng"
                                    id="select_place_lng"
                                    visibility="hidden"
                                />
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
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add Marker
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
