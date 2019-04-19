import React, { Component } from 'react';

import AddressMap from './components/AddressMap';
import AddressList from './components/AddressList';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import sampleMarkers from './sample-markers';
import AddNewMarkerModal from './components/AddNewMarkerModal';

class App extends Component {
    state = {
        markers: {},
        infoWindow: {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        },
    };

    componentDidMount() {
        this.loadSampleMarkers();
    }

    loadSampleMarkers = () => {
        this.setState({ markers: sampleMarkers });
    };

    addNewMarker = marker => {
        const markersObject = this.state.markers;
        const markers = { ...markersObject };
        markers[`marker${Date.now()}`] = marker;
        this.setState({ markers });
    };

    updateInfoWindow = updatedInfoWindow => {
        this.setState({ infoWindow: updatedInfoWindow });
    };

    render() {
        return (
            <div className="App h-100">
                <AddNewMarkerModal addNewMarker={this.addNewMarker} />
                <AppHeader />
                <div className="container-fluid h-100">
                    <div className="row h-100 m-0">
                        <AddressList markers={this.state.markers} />
                        <AddressMap
                            markers={this.state.markers}
                            infoWindow={this.state.infoWindow}
                            updateInfoWindow={this.updateInfoWindow}
                        />
                    </div>
                </div>
                <AppFooter />
            </div>
        );
    }
}

export default App;
