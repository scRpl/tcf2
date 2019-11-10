import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Vendor extends Component {
  render() {

    const { vendors, purposesProp, specialPurposesProp, featuresProp, specialFeaturesProp } = this.props;
    let paramId = this.props.match.params.id;
    const searchedVendor = vendors.find(v => v.id === Number(paramId))
    const { name, id, policyUrl, purposes, legIntPurposes, flexiblePurposes, specialPurposes, specialFeatures, features} = searchedVendor;

    const purposesIds = () => {
      const purposesArr = [];
      const objectValues = Object.values(purposesProp);
      objectValues.forEach(value => {
        purposesArr.push(value.id)
      })
      return purposesArr;
    }

    const filteredArray = (arr1, arr2) => {
      return arr1.filter(item => arr2.includes(item))
    };

    const purposesToRender = filteredArray(purposes, purposesIds().map(key => Number(key)));
    const legIntPurposesToRender = filteredArray(legIntPurposes, purposesIds().map(key => Number(key)));
    const flexiblePurposesToRender = filteredArray(flexiblePurposes, purposesIds().map(key => Number(key)));
    const specialPurposesToRender = filteredArray(specialPurposes, purposesIds().map(key => Number(key)));
    const featuresToRender = filteredArray(features, purposesIds().map(key => Number(key)));
    const specialFeaturesToRender = filteredArray(specialFeatures, purposesIds().map(key => Number(key)));

    const namesToRender = (purposesFiltered, purposesNames) => {
      const names = []
      purposesNames.forEach(purpose => {
        if (purposesFiltered.includes(purpose.id)) {
          names.push(purpose.name)
        }
      })
      return names;
    }

    const tableRender = (purposesArray, allPurposesArray, purposesNames) => {
      const names = namesToRender(purposesArray, purposesNames)
      const tableRows = [];
      for (let i = 0; i < allPurposesArray.length; i++) {
          tableRows.push(<tr key={allPurposesArray[i]}><td>{allPurposesArray[i]}</td><td>{names[i]}</td></tr>)
      }
      return tableRows;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <nav id="navbar-example3" className="navbar navbar-light bg-light">
              <nav className="nav nav-pills flex-column">
                <a className="nav-link small" href="#item-1">Name</a>
                <a className="nav-link small" href="#item-2">Purposes</a>
                <a className="nav-link small" href="#item-3">Legitimate Interest Purposes</a>
                <a className="nav-link small" href="#item-4">Flexible Purposes</a>
                <a className="nav-link small" href="#item-5">Special Purposes</a>
                <a className="nav-link small" href="#item-6">Features</a>
                <a className="nav-link small" href="#item-7">Special Features</a>
              </nav>
          </nav>
          </div>

          <div className="col-auto">
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" style={{position: 'relative', height: 'auto'}}>
              <h1 id="item-1">{name}</h1>
                  <p className="lead">This company is registed in the TCF 2.0 with a Global Vendor ID: <span className="font-weight-bold text-primary">{id}</span></p>
                  <p className="lead">Privacy policy available at: <a href={policyUrl} target="blank"><span className="font-weight-bold text-primary">{policyUrl}</span></a></p>
              <h5 id="item-2">Purposes</h5>
              {purposes &&
              <table className="table table-sm table-responsive">
                <caption>Selected purposes</caption>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRender(purposesToRender, purposes, purposesProp)}
                </tbody>
              </table>}

              <h5 id="item-3">Legitimate Interest Purposes</h5>
              {legIntPurposes.length > 0 ?
                <table className="table table-sm table-responsive">
                  <caption>Selected purposes (legitimate interest)</caption>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRender(legIntPurposesToRender, legIntPurposes, purposesProp)}
                  </tbody>
                </table>
               : <p>No legitimate interest purposes have been selected.</p>}
              <h5 id="item-4">Flexible Purposes</h5>
              {flexiblePurposes.length > 0 ?
                <table className="table table-sm table-responsive">
                  <caption>Flexible purposes</caption>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRender(flexiblePurposesToRender, flexiblePurposes, purposesProp)}
                  </tbody>
                </table>
               : <p>No flexible purposes have been selected.</p>}
              <h5 id="item-5">Special Purposes</h5>
              {specialPurposes.length > 0 ?
                <table className="table table-sm table-responsive">
                  <caption>Special Purposes</caption>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRender(specialPurposesToRender, specialPurposes, specialPurposesProp)}
                  </tbody>
                </table>
               : <p>No special purposes have been selected.</p>}
              <h5 id="item-6">Features</h5>
              {features.length > 0 ?
                <p>{features.join(', ')}</p>
               : <p>No features have been selected.</p>}
              <h5 id="item-7">Special Features</h5>
              {specialFeatures.length > 0 ?
                <p>{specialFeatures.join(', ')}</p>
               : <p>No special features have been selected.</p>}
            </div>
          </div>
          </div>
          </div>
    )
  }
}

export default withRouter(Vendor)
