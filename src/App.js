import React, { Component } from 'react';

import AddressMap from './components/AddressMap'
import AddressList from './components/AddressList'
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import sampleMarkers from './sample-markers';

class App extends Component {
    state = {
        markers: {},
        infoWindow: {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    loadSampleMarkers = () => {
        this.setState({ markers: sampleMarkers });
    }

    componentDidMount() {
        this.loadSampleMarkers();
    }

    updateInfoWindow = updatedInfoWindow => {
        this.setState({ infoWindow: updatedInfoWindow });
    }

    render() {
        return (
            <div className="App h-100">
                <AppHeader />
                <div className="container-fluid h-100">
                    <div className="row h-100 m-0">
                        <AddressList />
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
