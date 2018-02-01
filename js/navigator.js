import React from 'react';
import { StackNavigator } from "react-navigation";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "Sanpo/js/actions";

import Home from './screens/Home';

const MainNavigator = StackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: {
    headerBackTitle: null,
  }
});

class Navigator extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
