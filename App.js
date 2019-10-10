import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import codePush from "react-native-code-push";

export default class App extends Component {
  constructor() {
    super();
    this.state = { AppVersion: "no version" };
  }

  async getAppVersion() {
    const [{ appVersion }, update] = await Promise.all([
      codePush.getConfiguration(),
      codePush.getUpdateMetadata()
    ]);

    if (!update) {
      this.setState(
        {
          AppVersion: `v${appVersion}`
        },
        () => {
          console.log("No Update Available", this.state.AppVersion);
          Alert.alert("No Update Available","Current App Version : "+this.state.AppVersion);
        }
      );
      return;
    }

    const label = update.label.substring(1);
    this.setState(
      {
        AppVersion: `v${appVersion} rev.${label}`
      },
      () => {
        console.log("Update Available", this.state.AppVersion);
        Alert.alert("Update Available","Updated App Version : "+this.state.AppVersion);
      }
    );
    return;
    // return `v${appVersion} rev.${label}`;
  }

  render() {
    return (
      <View>
        <Text>Welcome to CodePush!!....!!Working</Text>
        <TouchableOpacity onPress={() => this.getAppVersion()}>
          <Text>Press to get getAppVersion from codepush</Text>
        </TouchableOpacity>
        <Text>
          {this.state.AppVersion || "Default Version"}
        </Text>
      </View>
    );
  }
}
