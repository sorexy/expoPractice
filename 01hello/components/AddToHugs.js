import React from "react";
import { Alert, View, Text, TextInput } from "react-native";

export default class AddToHugs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numHugsToAdd: 0};
    }

    handleSubmit = () => {
        this.setState({numHugsToAdd: Number(this.state.numHugsToAdd)})
        this.props.onAddHug(this.state.numHugsToAdd);
        this.numHugFieldInput.clear();
    }

    render() {
        return (
            <View style={{flex: 1,  alignItems: "center", backgroundColor: "pink"}}>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <Text style={{fontSize: 24}}>Welcome, how many coupons would you like to add?</Text>
                </View>
                <View style={{flex: 1}}>
                    <TextInput
                        style={{
                            width: 220,
                            height: 60,
                            fontSize: 18,
                            alignItems: "flex-start",
                            padding: 10,
                            borderColor: '#D3D3D3',
                            borderWidth: 1,
                            backgroundColor: "#F8F8FF"
                        }}
                        // ref says that the input is directed to the variable
                        // numHugFieldInput which was declared in the constructor
                        ref={input => {this.numHugFieldInput = input}}
                        keyboardType="numeric"
                        returnKeyType='done'
                        maxLength={6}
                        textAlign={'center'}
                        placeholder="Number of coupons"
                        onSubmitEditing={this.handleSubmit}
                        onChangeText={(input) => this.setState({numHugsToAdd: input})}
                    />
                </View>
            </View>
        );
    }
}
