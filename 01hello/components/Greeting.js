import React from 'react';
import { View, Text } from 'react-native';

export default class Greeting extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>Hug Bank</Text>
            </View>
        );
    }
}
