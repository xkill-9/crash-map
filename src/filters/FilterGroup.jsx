import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import { selectedOptionSelector } from './filterSelectors';
import { toggleFilterGroup, selectFilter } from './filterActions';
import FilterOptions from './FilterOptions';

const propTypes = {
  selectedOption: PropTypes.object,
  selectFilter: PropTypes.func,
  filter: PropTypes.shape({
    id: PropTypes.string,
    longName: PropTypes.string,
    shortName: PropTypes.string,
    icon: PropTypes.string,
    isOpened: PropTypes.bool,
    options: PropTypes.array,
  }),
  toggleFilterGroup: PropTypes.func,
};

class FilterGroup extends Component {

  constructor(props) {
    super(props);
    this.handleFilterExpand = this.handleFilterExpand.bind(this);
    this.displaySubtitle = this.displaySubtitle.bind(this);
  }

  componentDidMount() {
    if (!this.props.selectedOption) {
      this.props.selectFilter({
        id: this.props.filter.id,
        value: this.props.filter.options[0].value,
      });
    }
  }

  displaySubtitle() {
    if (this.props.selectedOption) {
      return this.props.selectedOption.name;
    }
    return '';
  }

  handleFilterExpand(expanded) {
    this.props.toggleFilterGroup(this.props.filter.id, expanded);
  }

  render() {
    if (!this.props.filter) return null;
    const { options, longName, icon, id } = this.props.filter;
    return (
      <Card
        expanded={this.props.filter.isOpened}
        onExpandChange={this.handleFilterExpand}
      >
        <CardHeader
          avatar={
            <Avatar
              size={35}
              icon={<FontIcon className="material-icons">{icon}</FontIcon>}
            />
          }
          subtitle={this.displaySubtitle()}
          title={longName}
          actAsExpander
          showExpandableButton
        />
        <Collapse isOpened={this.props.filter.isOpened} >
          <CardText expandable>
            <FilterOptions filterId={id} options={options} />
          </CardText>
        </Collapse>
      </Card>
    );
  }
}

FilterGroup.propTypes = propTypes;

function mapStateToProps(state, props) {
  return {
    selectedOption: selectedOptionSelector(props.filter.id)(state),
  };
}

export default connect(
  mapStateToProps,
  { toggleFilterGroup, selectFilter }
)(FilterGroup);
