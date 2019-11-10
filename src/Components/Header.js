import React, { Component } from 'react';
import Downshift from 'downshift';
import { css } from 'emotion';
import {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon,
  itemToString,
} from './styled';
import matchSorter from 'match-sorter';
import { withRouter } from 'react-router-dom';


class Header extends Component {
  render() {

  function getItems(filter) {
    return filter
      ? matchSorter(allItems, filter, {keys: ['name']})
      : allItems
  }

  const allItems = this.props.vendors;

    return (
      <div className="navbar navbar-light bg-light navbar-nav border-bottom">
        <span className="navbar-brand mb-0 h1">IAB TCF 2.0 Global Vendor List</span>
          <div className={css({ width: 300, margin: 'auto' })}>
          <Downshift
            itemToString={itemToString}
            onChange={this.props.onChange}
          >
            {({
              getLabelProps,
              getInputProps,
              getToggleButtonProps,
              getMenuProps,
              getItemProps,
              isOpen,
              clearSelection,
              selectedItem,
              inputValue,
              highlightedIndex,
            }) => (
                <div className={css({position: 'relative'})}>
                  <Input
                    {...getInputProps({
                      isOpen,
                      placeholder: 'Enter a name',
                    })}
                  />
                  {selectedItem ? (
                    <ControllerButton
                      onClick={clearSelection}
                      aria-label="clear selection"
                    >
                      <XIcon />
                    </ControllerButton>
                  ) : (
                    <ControllerButton {...getToggleButtonProps()}>
                      <ArrowIcon isOpen={isOpen} />
                    </ControllerButton>
                  )}
                  <Menu {...getMenuProps({isOpen})}>
                    {isOpen
                      ? getItems(inputValue).map((item, index) => (
                          <Item
                            key={item.id}
                            {...getItemProps({
                              item,
                              index,
                              isActive: highlightedIndex === index,
                              isSelected: selectedItem === item,
                            })}
                          >
                            {itemToString(item)}
                          </Item>
                        ))
                      : null}
                  </Menu>
                </div>
            )}
          </Downshift>
          </div>
        </div>

    )
  }
}

export default withRouter(Header);
