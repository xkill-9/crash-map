import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import { selectFilter } from './filterActions';
import { selectedOptionSelector } from './filterSelectors';

const propTypes = {
  selectedOption: PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
  }),
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
    this.selectedValue = this.selectedValue.bind(this);
  }
  // componentDidMount() {
  //   // Select the first option by default if no option is previously selected.
  //   if (!this.props.selectedOption) {
  //     this.props.selectFilter({
  //       id: this.props.filterId,
  //       value: this.props.options[0].value,
  //     });
  //   }
  // }

  selectedValue() {
    if (this.props.selectedOption) {
      return this.props.selectedOption.value;
    }
    return '';
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
        valueSelected={this.selectedValue()}
      >
        {this.renderOptions(this.props.options)}
      </RadioButtonGroup>
    );
  }
}

FilterOptions.propTypes = propTypes;

function mapStateToProps(state, props) {
  return {
    selectedOption: selectedOptionSelector(props.filterId)(state),
  };
}

export default connect(
  mapStateToProps,
  { selectFilter }
)(FilterOptions);
