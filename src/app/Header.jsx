import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { openFiltersDrawer } from '../filters/filterActions';
import { openShareDrawer } from '../share/shareActions';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ShareIcon from 'material-ui/svg-icons/social/share';

const propTypes = {
  openFiltersDrawer: PropTypes.func,
  openShareDrawer: PropTypes.func,
};

const styles = {
  textAlign: 'center',
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLeftIconTouchTap = this.handleLeftIconTouchTap.bind(this);
    this.handleRightIconTouchTap = this.handleRightIconTouchTap.bind(this);
  }

  handleLeftIconTouchTap() {
    this.props.openFiltersDrawer();
  }

  handleRightIconTouchTap() {
    this.props.openShareDrawer();
  }

  render() {
    return (
      <AppBar
        style={styles}
        iconElementRight={
          <FlatButton
            label="Share"
            labelPosition="before"
            icon={<ShareIcon />}
          />
        }
        onLeftIconButtonTouchTap={this.handleLeftIconTouchTap}
        onRightIconButtonTouchTap={this.handleRightIconTouchTap}
        title="Houston Crash Map"
      />
    );
  }
}

Header.propTypes = propTypes;

export default connect(
  null,
  { openFiltersDrawer, openShareDrawer }
)(Header);
