import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectedFiltersSelector } from './filterSelectors';
import FilterChip from './FilterChip';

const propTypes = {
  activeFilters: PropTypes.array,
  hideFilterName: PropTypes.bool,
};


class FiltersActive extends Component {
  constructor(props) {
    super(props);
    this.renderActiveFilters = this.renderActiveFilters.bind(this);
  }

  renderActiveFilters(filters) {
    if (!filters) return null;
    return filters.map(filter => (
      <FilterChip hideFilterName={this.props.hideFilterName} key={filter.id} filter={filter} />
    ));
  }

  render() {
    return (
      <div className="active-filters__list" >
        {this.renderActiveFilters(this.props.activeFilters)}
      </div>
    );
  }
}

FiltersActive.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    activeFilters: selectedFiltersSelector(state),
  };
}

export default connect(
  mapStateToProps
)(FiltersActive);
