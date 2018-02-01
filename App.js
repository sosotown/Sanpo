import React from "react";
import { View } from "react-native";

import { Provider } from "react-redux";
import configStore from "./js/store";

import Navigator from "./js/navigator"
import FetchingUI from './js/FetchingUI';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configStore.store}>
        <View style={{flex: 1}}>
          <Navigator />
          <FetchingUI />
        </View>
      </Provider>
    );
  }
}
