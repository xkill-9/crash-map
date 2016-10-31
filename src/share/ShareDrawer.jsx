import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import { closeShareDrawer } from './shareActions';

const propTypes = {
  open: PropTypes.bool,
  closeShareDrawer: PropTypes.func,
};

class ShareDrawer extends Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.props.closeShareDrawer();
  }

  render() {
    return (
      <Drawer
        docked={false}
        openSecondary
        width={400}
        open={this.props.open}
        onRequestChange={this.closeDrawer}
      >
        <Toolbar>
          <ToolbarGroup firstChild>
            <FontIcon className="material-icons" onClick={this.closeDrawer}>arrow_back</FontIcon>
          </ToolbarGroup>
          <ToolbarGroup lastChild>
            <ToolbarTitle text="Share" />
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon className="material-icons">help_outline</FontIcon>
          </ToolbarGroup>
        </Toolbar>
        <MenuItem primaryText="Item 1" />
        <MenuItem primaryText="Item 2" />
      </Drawer>
    );
  }
}

ShareDrawer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    open: state.share.drawerOpen,
  };
}

export default connect(
  mapStateToProps,
  { closeShareDrawer }
)(ShareDrawer);
