import React from "react";
import { Alert, View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
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
            <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
                <View style={styles.authContainer}>
                    <Text style={styles.text}>Authenticate</Text>
                </View>
                {/* WHY THIS CANNOT HAVE FLEX? IF HAS FLEX THEN KEYBOARDAVOIDINGVIEW DOESN'T WORK */}
                <View style={styles.loginFormView}>
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

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "teal"
    },
    keyboardAvoidingView: {
        flex:1,
        backgroundColor: "yellow"
    },
    loginFormView: {
        backgroundColor: "red"
    },
    text: {
        fontSize: 22
    }
})
