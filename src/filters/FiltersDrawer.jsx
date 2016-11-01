import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import { List } from 'material-ui/List';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { connect } from 'react-redux';

import { closeFiltersDrawer, fetchFilters } from './filterActions';
import FilterGroup from './FilterGroup';

const propTypes = {
  open: PropTypes.bool,
  closeFiltersDrawer: PropTypes.func,
  fetchFilters: PropTypes.func,
  filters: PropTypes.array,
};

class FiltersDrawer extends Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  componentDidMount() {
    this.props.fetchFilters();
  }


  closeDrawer() {
    this.props.closeFiltersDrawer();
  }

  renderFilterGroups(filters) {
    return filters.map(filter => (
      <FilterGroup key={filter.id} filter={filter} />
    ));
  }

  render() {
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
          {this.renderFilterGroups(this.props.filters)}
        </List>
      </Drawer>
    );
  }
}

FiltersDrawer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    open: state.filters.drawerOpen,
    filters: state.filters.all,
  };
}

export default connect(
  mapStateToProps,
  { closeFiltersDrawer, fetchFilters }
)(FiltersDrawer);
