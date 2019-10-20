import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { VendorList } from './Components/VendorList';

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
      vendors: data.vendors,
      purposes: data.purposes,
      specialFeatures: data.specialFeatures,
      specialPurposes: data.specialPurposes,
      features: data.features,
      lastUpdated: data.lastUpdated,
      vendorListVersion: data.vendorListVersion
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
      <div class="container-fluid">
        <Header getSearchWord={this._getSearchedWord.bind(this)} />
        <VendorList lastUpdated={this.state.lastUpdated} />
      </div>
    );
  }
}

export default App;
