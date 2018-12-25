import React from "react";
import { View, Text } from "react-native";
import AddToHugs from "../components/AddToHugs"

export default class AddHugScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <AddToHugs/>
            </View>
        );
    }
}
