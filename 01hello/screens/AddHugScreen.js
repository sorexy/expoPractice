import React from "react";
import { Alert, View, Text } from "react-native";
import AddToHugs from "../components/AddToHugs"

export default class AddHugScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numHugsToAdd: 0}
    }

    onAddHug = (numHugs) => {
        this.setState({
            numHugsToAdd: this.state.numHugsToAdd += numHugs}
        );

        // Send as JSON, the value numHugsInString, under the key "numHugsToAdd" to Home
        this.props.navigation.navigate('Home', {numHugsToAdd: this.state.numHugsToAdd});
}
    static navigationOptions = {
      header: null,
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <AddToHugs onAddHug={this.onAddHug}/>
            </View>
        );
    }
}
