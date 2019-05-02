import React from 'react';
import PropTypes from 'prop-types';
import {
    Map,
    GoogleApiWrapper,
    Marker,
    InfoWindow,
    Polyline,
} from 'google-maps-react';

class AddressMap extends React.Component {
    static propTypes = {
        markers: PropTypes.shape({
            name: PropTypes.string,
            position: PropTypes.object,
        }),
        infoWindow: PropTypes.shape({
            showingInfoWindow: PropTypes.bool,
            activeMarker: PropTypes.object,
            selectedPlace: PropTypes.object,
        }),
        updateInfoWindow: PropTypes.func,
    };

    loadAutoComplete = () => {
        const input = document.getElementById('map_address');
        const latInput = document.getElementById('select_place_lat');
        const lngInput = document.getElementById('select_place_lng');
        const dropdown = new window.google.maps.places.Autocomplete(input);

        dropdown.addListener('place_changed', () => {
            const place = dropdown.getPlace();
            latInput.value = place.geometry.location.lat();
            lngInput.value = place.geometry.location.lng();
        });
    };

    onMarkerClick = (props, marker) => {
        const newInfoWindow = {
            showingInfoWindow: true,
            selectedPlace: props,
            activeMarker: marker,
        };
        this.props.updateInfoWindow(newInfoWindow);
    };

    renderMarker = key => {
        const marker = this.props.markers[key];
        return (
            <Marker
                key={key}
                index={key}
                name={marker.name}
                position={marker.position}
                onClick={this.onMarkerClick}
            />
        );
    };

    render() {
        const { markers } = this.props;
        const coordinates = Object.keys(markers).map(
            key => markers[key].position
        );
        return (
            <Map
                id="my_map"
                google={this.props.google}
                zoom={12}
                className="h-100 col-md-9"
                initialCenter={{ lat: -37.8136, lng: 144.9631 }}
                onReady={this.loadAutoComplete}
            >
                {Object.keys(markers).map(this.renderMarker)}
                <InfoWindow
                    marker={this.props.infoWindow.activeMarker}
                    visible={this.props.infoWindow.showingInfoWindow}
                >
                    <div>
                        <h6>{this.props.infoWindow.selectedPlace.name}</h6>
                    </div>
                </InfoWindow>
                <Polyline path={coordinates} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_KEY,
})(AddressMap);
