import React, { Component } from 'react';

import AddressMap from './components/AddressMap'
import AddressList from './components/AddressList'
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

class App extends Component {
    render() {
        return (
            <div className="App h-100">
                <AppHeader />
                <div className="container-fluid h-100">
                    <div className="row h-100 m-0">
                        <AddressList />
                        <AddressMap />
                    </div>
                </div>
                <AppFooter />
            </div>
        );
    }
}

export default App;
