import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class AddressMap extends React.Component {
    static propTypes = {
        markers: PropTypes.shape({
            name: PropTypes.string,
            position: PropTypes.object
        }),
        infoWindow: PropTypes.shape({
            showingInfoWindow: PropTypes.bool,
            activeMarker: PropTypes.object,
            selectedPlace: PropTypes.object
        }),
        updateInfoWindow: PropTypes.func
    }

    onMarkerClick = (props, marker, e) => {
        const newInfoWindow = {
            showingInfoWindow: true,
            selectedPlace: props,
            activeMarker: marker,
        }
        this.props.updateInfoWindow(newInfoWindow);
    }

    renderMarker = key => {
        const marker = this.props.markers[key];
        return (
            <Marker key={key} index={key} name={marker.name} position={marker.position} onClick={this.onMarkerClick} />
        )
    }

    render() {
        return (
            <Map id="my_map" google={this.props.google} zoom={12} className="h-100 col-md-9" initialCenter={{ lat: -37.8136, lng: 144.9631 }}>
                {Object.keys(this.props.markers).map(this.renderMarker)}
                <InfoWindow
                    marker={this.props.infoWindow.activeMarker}
                    visible={this.props.infoWindow.showingInfoWindow}>
                    <div>
                        <h6>{this.props.infoWindow.selectedPlace.name}</h6>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_KEY
})(AddressMap);
