import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import { selectFilter } from './filterActions';

const propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.string,
    longName: PropTypes.string,
    shortName: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
  selectFilter: PropTypes.func,
};

class FilterGroup extends Component {

  constructor(props) {
    super(props);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }

  handleFilterSelect(event, value) {
    this.props.selectFilter({ id: this.props.filter.id, value });
  }

  renderOptions(options) {
    return options.map(option => (
      <RadioButton key={option.value} label={option.name} value={option.value} />
    ));
  }

  render() {
    if (!this.props.filter) return null;
    const { options, longName } = this.props.filter;
    return (
      <ListItem
        primaryText={longName}
        primaryTogglesNestedList
        nestedItems={[
          <RadioButtonGroup onChange={this.handleFilterSelect} key="1" name="year">
            {this.renderOptions(options)}
          </RadioButtonGroup>,
        ]}
      />
    );
  }
}

FilterGroup.propTypes = propTypes;

export default connect(
  null,
  { selectFilter }
)(FilterGroup);
