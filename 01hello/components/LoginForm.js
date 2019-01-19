import React from 'react';
import { Alert, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onReceiveusername = (user) => {
        this.setState({username: user});
    }

    onReceivePassword = (pass) => {
        this.setState({})
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="username"
                    placeholderTextColor="grey"
                    returnKeyType="next"

                    style={styles.input}
                    />
                <TextInput
                    placeholder="password"
                    returnKeyType="go"
                    style={styles.input}
                    secureTextEntry
                    ref={(input) => this.password = input}
                    />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    // TODO: Update this.state.username and this.state.password to the text input values
                    //       and pass these values in the function below
                    onPress={() => this.props.onHandleLoginAttempt("sorex", "1341")}
                    >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "#fffdd0",
        marginBottom: 20,
        color: "black",
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: "green",
        alignItems: "center",
        paddingVertical: 15
    },
    buttonText: {
        color: "white",
        fontWeight: "700"
    }
})
