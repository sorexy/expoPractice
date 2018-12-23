import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counterValue: 0 }
    }

    // Method declarations
    handleClick = () => {
        this.setState(previousState => (
            { counterValue: this.state.counterValue+=1 }
        ))
    }

    handleReset = () => {
        this.setState(previousState => (
            { counterValue: 0 }
        ))
    }

    render() {
        return (
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 18, color:"green"}}>
                    { this.state.counterValue }
                </Text>
                <Button
                    onPress={this.handleClick}
                    title="Increment Counter"
                    color="blue"/>
                <Button
                    onPress={this.handleReset}
                    title="Reset Counter"
                    color="red"/>
            </View>
        );
    }
}
