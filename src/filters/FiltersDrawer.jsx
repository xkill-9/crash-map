import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import { List } from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { connect } from 'react-redux';

import { closeFiltersDrawer } from './filterActions';
import FilterGroup from './FilterGroup';

const propTypes = {
  open: PropTypes.bool,
  closeFiltersDrawer: PropTypes.func,
};

class FiltersDrawer extends Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.props.closeFiltersDrawer();
  }

  renderFilterGroups(filters) {
    return filters.map(filter => (
      <FilterGroup key={filter.name} name={filter.name} />
    ));
  }

  render() {
    const filters = [
      { name: 'Year' },
      { name: 'Contribuiting Factors' },
      { name: 'Severity' },
      { name: 'Vehicles Involved' },
      { name: 'Weather' },
    ];
    return (
      <Drawer
        docked={false}
        width={400}
        open={this.props.open}
        onRequestChange={this.closeDrawer}
      >
        <Toolbar>
          <ToolbarGroup firstChild>
            <FontIcon className="material-icons" onClick={this.closeDrawer}>arrow_back</FontIcon>
          </ToolbarGroup>
          <ToolbarGroup lastChild>
            <ToolbarTitle text="Filters" />
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon className="material-icons">help</FontIcon>
          </ToolbarGroup>
        </Toolbar>
        <List>
          {this.renderFilterGroups(filters)}
        </List>
      </Drawer>
    );
  }
}

FiltersDrawer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    open: state.filters.drawerOpen,
  };
}

export default connect(
  mapStateToProps,
  { closeFiltersDrawer }
)(FiltersDrawer);
