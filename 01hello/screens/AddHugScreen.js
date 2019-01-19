import React from "react";
import { Alert, View, Text } from "react-native";
import AddToHugs from "../components/AddToHugs"

export default class AddHugScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numHugsToAdd: 0}
    }

    onAddHug = (numHugs) => {
        // TODO: Remove this shit later
        displayValue = this.state.numHugsToAdd + numHugs;
        displayValue = displayValue.toString();
        this.setState({numHugsToAdd: this.state.numHugsToAdd+=numHugs}, Alert.alert(displayValue));
        this.props.navigation.navigate('Home');
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
