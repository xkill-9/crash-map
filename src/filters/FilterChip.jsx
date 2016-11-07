import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import { removeFilter } from './filterActions';

const propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    selectedOption: PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
    name: PropTypes.string,
  }),
  removeFilter: PropTypes.func,
  hideFilterName: PropTypes.bool,
};

class FilterChip extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      margin: 5,
    };
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    this.displayFilterName = this.displayFilterName.bind(this);
  }

  displayFilterName() {
    if (this.props.hideFilterName) return '';
    return `${this.props.filter.name}: `;
  }

  handleDeleteRequest() {
    this.props.removeFilter(this.props.filter.id);
  }

  render() {
    const { icon, selectedOption } = this.props.filter;
    return (
      <Chip
        style={this.styles}
        className="filter-chip"
        onRequestDelete={this.handleDeleteRequest}
      >
        <Avatar
          icon={
            <FontIcon className="material-icons">{icon}</FontIcon>
          }
        />
        <b>{this.displayFilterName()}</b>
        {selectedOption.name}
      </Chip>
    );
  }
}

FilterChip.propTypes = propTypes;

export default connect(
  null,
  { removeFilter }
)(FilterChip);
