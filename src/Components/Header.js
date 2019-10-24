import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Downshift from 'downshift';
import styled from '@emotion/styled';

const onAttention = '&:hover, &:focus'
const Input = styled('input')(
  {
    width: '100%', // full width - icon width/2 - border
    fontSize: 14,
    wordWrap: 'break-word',
    lineHeight: '1em',
    outline: 0,
    whiteSpace: 'normal',
    minHeight: '2em',
    background: '#fff',
    display: 'inline-block',
    padding: '1em 2em 1em 1em',
    color: 'rgba(0,0,0,.87)',
    boxShadow: 'none',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.30rem',
    transition: 'box-shadow .1s ease,width .1s ease',
    [onAttention]: {
      borderColor: '#96c8da',
      boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    },
  },
  ({isOpen}) =>
    isOpen
      ? {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          [onAttention]: {
            boxShadow: 'none',
          },
        }
      : null,
)

export class Header extends Component {
  render() {

    const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]

    return (
      <nav className="navbar navbar-light bg-light navbar-nav border-bottom d-flex">
        <span className="navbar-brand mb-0 h1">IAB TCF 2.0 Global Vendor List</span>
        <Downshift
    onChange={selection =>
      alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
        <label {...getLabelProps()}>IAB TCF 2.0 Global Vendor List</label>
        <Input {...getInputProps()} />
        <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
    </Downshift>
      </nav>

    )
  }
}
