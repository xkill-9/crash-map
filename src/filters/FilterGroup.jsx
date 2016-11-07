import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import { currentFilterSelector } from './filterSelectors';
import { toggleFilterGroup } from './filterActions';
import FilterOptions from './FilterOptions';

const propTypes = {
  currentFilter: PropTypes.object,
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

  displaySubtitle() {
    if (this.props.currentFilter) {
      return this.props.currentFilter.selectedOption.name;
    }
    return this.props.filter.shortName;
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
    currentFilter: currentFilterSelector(props.filter.id)(state),
  };
}

export default connect(
  mapStateToProps,
  { toggleFilterGroup }
)(FilterGroup);
