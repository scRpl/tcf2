import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Vendor from './Components/Vendor';
import { Route, Switch, withRouter } from 'react-router-dom';
import { css } from 'emotion';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vendors: {},
      purposes: [],
      specialPurposes: [],
      features: [],
      specialFeatures: [],
      vendorListVersion: [],
      lastUpdated: [],
      loaded: null
    }
    this.handleChange = this.handleChange.bind(this);
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
      lastUpdated: data.lastUpdated,
      loaded: true,
      lightsOut: false
    })
  } catch(e) {
    console.log(e)
  }
}

handleChange(selectedItem) {
  const { history } = this.props
  const vendor = selectedItem ? `/${selectedItem.id}` : '/';
  history.push(vendor);
};

  render() {

    return (
      <div className="container-fluid">
          <Header
          vendors={this.state.vendors}
          onChange={this.handleChange}
          />
          <Switch>
            <Route path='/:id'>
            {this.state.loaded ?
              <Vendor
              vendors={this.state.vendors}
              purposesProp={this.state.purposes}
              specialPurposesProp={this.state.specialPurposes}
              featuresProp={this.state.features}
              specialFeaturesProp={this.state.specialFeatures}
              /> : null}
            </Route>
            <Route exact path="/">
              <div className={css({
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              })}>
                <h5>Current Vendor List Version: <span className="text-primary">{this.state.vendorListVersion}</span></h5>
                <h5>Last Update: <span className="text-primary">{this.state.lastUpdated}</span></h5>
                <h5>Here will be your search results.</h5>
              </div>
            </Route>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
