import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import LoginForm from "../components/LoginForm";

export default class AuthenticationScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{flex:1, backgroundColor: "yellow"}}>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "blue"}}>
                    <Text>Authenticate</Text>
                </View>
                {/* WHY THIS CANNOT HAVE FLEX? IF HAS FLEX THEN KEYBOARDAVOIDINGVIEW DOESN'T WORK */}
                <View style={{backgroundColor: "red"}}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
