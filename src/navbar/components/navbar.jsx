import React from 'react'
import {AppBar, Tabs, Tab, MenuList, MenuItem } from 'material-ui'

class NavBar extends React.Component {
  render() {
    return (
      <AppBar title="My App">
        <Tabs>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </AppBar>
    )
  }
}

export default NavBar;
