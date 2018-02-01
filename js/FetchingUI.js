import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

// redux infra
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from "Sanpo/js/actions";

import { colors } from './styles/colors';

class FetchingUI extends React.Component {
  render() {
    const styles = StyleSheet.create({
      cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'
      }
    });
    if (this.props.generalUI.isFetching) {
      return (
        <View style={styles.cover}>
          <ActivityIndicator
            color={colors.primary}
            size="large"
          />
        </View>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FetchingUI);
