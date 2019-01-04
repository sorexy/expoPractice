import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.username="";
        this.password="";
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="username"
                    placeholderTextColor="grey"
                    returnKeyType="next"
                    // After submit, will focus on this.password (which is input of password)
                    ref={(input) => this.username = input}
                    onSubmitEditing={() => this.password.focus()}
                    style={styles.input}
                    />
                <TextInput
                    placeholder="password"
                    returnKeyType="go"
                    style={styles.input}
                    secureTextEntry
                    ref={(input) => this.password = input}
                    />
                <TouchableOpacity style={styles.buttonContainer}>
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
