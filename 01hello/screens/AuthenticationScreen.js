import React from "react";
import { Alert, View, Text, KeyboardAvoidingView } from "react-native";
import LoginForm from "../components/LoginForm";

// Username and passwords to log in
const userToCompare = "sorex";
const pwToCompare = "1341";


export default class AuthenticationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: "",
            password: ""
        }
    }

    onHandleLoginAttempt = (user, pass) => {
        // Using setState like this invokes callback and forces setstate to refresh new data
        this.setState({
            username: user,
            password: pass
        }, () => this.onHandleAuth())
    }

    onHandleAuth = () => {
        if (this.state.username == userToCompare && this.state.password == pwToCompare) {
            Alert.alert("Logged in");
        } else {
            Alert.alert("Invalid Credentials");
        }
    }

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
                    <LoginForm
                        isLoggedIn={this.state.isLoggedIn}
                        username={this.state.username}
                        password={this.state.password}
                        onHandleAuth={this.onHandleAuth}
                        onHandleLoginAttempt={this.onHandleLoginAttempt}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
