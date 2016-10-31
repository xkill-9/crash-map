import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

const FilterGroup = ({ name }) => (
  <ListItem
    primaryText={name}
    primaryTogglesNestedList
    nestedItems={[
      <RadioButtonGroup key="1" name="year">
        <RadioButton
          value="2012"
          label="2012"
        />
        <RadioButton
          value="2013"
          label="2013"
        />
        <RadioButton
          value="2014"
          label="2014"
        />
        <RadioButton
          value="2015"
          label="2015"
        />
      </RadioButtonGroup>,
    ]}
  />
);

FilterGroup.propTypes = propTypes;

export default FilterGroup;
