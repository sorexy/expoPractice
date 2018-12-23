import React from 'react';
import { View, Text } from 'react-native';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{marginVertical: 100, alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>Hello there, {this.props.name}</Text>
            </View>
        );
    }
}
