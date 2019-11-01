import React, { Component } from 'react';

export class Vendor extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <nav id="navbar-example3" className="navbar navbar-light bg-light">
              <nav className="nav nav-pills flex-column">
                <a className="nav-link" href="#item-1">Item 1</a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
                    <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
                  </nav>
                <a className="nav-link" href="#item-2">Item 2</a>
                <a className="nav-link" href="#item-3">Item 3</a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
                    <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
                  </nav>
              </nav>
          </nav>
          </div>
          <div className="col-10">
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
              <h1 id="item-1">RTB House</h1>
                  <p className="lead">This company is registed in the TCF 2.0 with a Global Vendor ID: <span className="font-weight-bold text-primary">16</span></p>
              <h3 id="item-1-1">Item 1-1</h3>
                <p></p>
              <h5 id="item-1-2">Item 1-2</h5>
                <p></p>
              <h3 id="item-2">Purposes</h3>
                <p>...</p>
              <h4 id="item-3">Item 3</h4>
                <p>...</p>
              <h5 id="item-3-1">Item 3-1</h5>
                <p>...</p>
              <h5 id="item-3-2">Item 3-2</h5>
                <p>...</p>
            </div>
          </div>
          </div>
          </div>
    )
  }
}
