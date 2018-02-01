import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "Sanpo/js/actions";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flex: 1,
  },
});

class Navigator extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.test()}
      >
        <Text>aaaaa</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
