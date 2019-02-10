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

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="username"
                    placeholderTextColor="grey"
                    returnKeyType="next"
                    onChangeText={(user) => this.setState({username: user})}
                    onSubmitEditing={() => { this.passwordRef.focus(); }}
                    style={styles.input}
                    />
                <TextInput
                    placeholder="password"
                    returnKeyType="go"
                    style={styles.input}
                    secureTextEntry
                    onChangeText={(pass) => this.setState({password: pass})}
                    ref={(input) => { this.passwordRef = input; }}
                    />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.props.onHandleLoginAttempt(this.state.username, this.state.password)}
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
