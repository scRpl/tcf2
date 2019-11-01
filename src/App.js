import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Vendor } from './Components/Vendor';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vendors: [],
      purposes: [],
      specialPurposes: [],
      features: [],
      specialFeatures: [],
      vendorListVersion: [],
      lastUpdated: [],
      searchedVendor: ''
    }
  }

async componentDidMount() {
  try {
    const proxyurl = "https://rocky-waters-98581.herokuapp.com/";
    const response = await fetch(proxyurl + 'https://vendorlist.consensu.org/v2/vendor-list.json')
    const data = await response.json()
    this.setState({
      vendors: Object.values(data.vendors),
      purposes: Object.values(data.purposes),
      specialPurposes: Object.values(data.specialPurposes),
      features: Object.values(data.features),
      specialFeatures: Object.values(data.specialFeatures),
      vendorListVersion: data.vendorListVersion,
      lastUpdated: data.lastUpdated
    })
  } catch(e) {
    console.log(e)
  }
}

_getSearchedWord(word) {
  this.setState({ searchedVendor: word })
}

  render() {
    return (
      <div className="container-fluid">
        <Header
        getSearchWord={this._getSearchedWord.bind(this)}
        searchedVendor={this.state.searchedVendor}
        vendors={this.state.vendors}
        />
        <Vendor
        lastUpdated={this.state.lastUpdated}
        vendors={this.state.vendors}
        purposes={this.state.purposes}
        />
      </div>
    );
  }
}

export default App;
