import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import { selectFilter } from './filterActions';

const propTypes = {
  filterId: PropTypes.string,
  selectFilter: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }
  handleFilterSelect(event, value) {
    this.props.selectFilter({ id: this.props.filterId, value });
  }
  renderOptions(options) {
    return options.map(option => (
      <RadioButton key={option.value} label={option.name} value={option.value} />
    ));
  }
  render() {
    return (
      <RadioButtonGroup
        onChange={this.handleFilterSelect}
        name={this.props.filterId}
      >
        {this.renderOptions(this.props.options)}
      </RadioButtonGroup>
    );
  }
}

FilterOptions.propTypes = propTypes;

export default connect(
  null,
  { selectFilter }
)(FilterOptions);
