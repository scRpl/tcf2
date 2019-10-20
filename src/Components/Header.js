import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};


export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: `Type a vendor's name`,
      value,
      onChange: this.onChange
    };

    return (
      <nav className="navbar navbar-light bg-light navbar-nav border-bottom d-flex">
        <span className="navbar-brand mb-0 h1">IAB TCF 2.0 Global Vendor List</span>
        <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        />
      </nav>

    )
  }
}
