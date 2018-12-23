import React from 'react';
import { View, Text } from 'react-native';

export default class Greeting extends React.Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello there, {this.props.name}</Text>
            </View>
        );
    }
}
