import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';

import { toggleActiveFilters } from './filterActions';
import FiltersActive from './FiltersActive';

const propTypes = {
  isOpened: PropTypes.bool,
  toggleActiveFilters: PropTypes.func,
};


class FiltersActivePanel extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(ev, isChecked) {
    this.props.toggleActiveFilters(isChecked);
  }

  render() {
    return (
      <div>
        <Collapse
          isOpened={this.props.isOpened}
        >
          <div className="active-filters__panel">
            <span className="active-filters__label">Active filters:</span>
            <FiltersActive />
          </div>
        </Collapse>
        <div className="active-filters__checkbox">
          <Checkbox
            label="Show active filters"
            onCheck={this.handleCheck}
          />
        </div>
      </div>
    );
  }
}

FiltersActivePanel.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isOpened: state.filters.showActiveFilters,
  };
}

export default connect(
  mapStateToProps,
  { toggleActiveFilters }
)(FiltersActivePanel);
