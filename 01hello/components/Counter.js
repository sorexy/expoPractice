import React from "react";
import { TouchableOpacity, Alert, View, Text, Button } from "react-native";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counterValue: this.props.initialValue }
    }

    // Method declarations
    handleClick = () => {
        if (this.state.counterValue <= 0) {
            Alert.alert("You're out of coupons buddy boy");

        } else {
            this.setState(previousState => (
                { counterValue: this.state.counterValue-=1 }
            ))
        }
    }

    handleReset = () => {
        this.setState(previousState => (
            { counterValue: this.props.initialValue }
        ))
    }

    render() {
        return (
            <View style={{ flex:1, justifyContent: "space-evenly", alignItems: "center"}}>
                <View style={{ alignItems: "center"}}>
                    <Text style={{fontSize: 22, color:"black"}}>
                        You have
                    </Text>
                    {/* TODO: make color change when passing certain threshold of hugs */}
                    <Text style={{fontSize: 36, color:"black"}}>
                        { this.state.counterValue }
                    </Text>
                    <Text style={{fontSize: 22, color:"black"}}>
                        hugs left!
                    </Text>
                </View>
                <View style={{marginBottom: 30, width: 260, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#2196F3"}}>
                    <TouchableOpacity onPress={this.handleClick}>
                        <View style={{width:260, height:50, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 16, color:"white"}}>
                                Use Coupon
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        onPress={this.handleReset}
                        title="Reset Counter"
                        color="red"/>
                </View>
            </View>
        );
    }
}
