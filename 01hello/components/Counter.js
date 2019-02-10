import React from "react";
import { AsyncStorage, TouchableOpacity, Alert, View, Text, Button, StyleSheet } from "react-native";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counterValue: this.props.initialValue }
        this.claimed = false;
    }

    componentDidMount() {
        this.handleLoadData();
    }

    handleLoadData = async () => {
        let numHugs = await AsyncStorage.getItem('numHugs');
        this.setState({counterValue: numHugs});
    }

    handleSaveData = async () => {
        AsyncStorage.setItem('numHugs', this.state.counterValue.toString());
    }

    // Method declarations
    handleClick = () => {
        if (this.state.counterValue <= 0) {
            Alert.alert("You're out of coupons buddy boy");
        } else {
            this.setState({counterValue: this.state.counterValue -= 1},
            this.handleSaveData)
        }
    }

    handleClaim = () => {
        if (this.props.numHugsToAdd > 0 && this.claimed == false) {
            this.setState({counterValue: parseInt(this.state.counterValue, 10) +
                parseInt(this.props.numHugsToAdd, 10)});
            this.claimed = true;
            this.handleSaveData();
        } else {
            Alert.alert("Don't be greedy!");
        }
    }

    render() {
        return (
            <View style={styles.outermostView}>
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
                <View style={styles.touchableOpacityView}>
                    <TouchableOpacity onPress={this.handleClick}>
                        <View style={styles.touchableOpacityView2}>
                            <Text style={{fontSize: 16, color:"white"}}>
                                Use Coupon
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        onPress={this.handleClaim}
                        title="Claim Tokens!"
                        color="green"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        outermostView: {
            flex:1,
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        touchableOpacityView: {
            marginBottom: 30,
            width: 260,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2196F3"
        },
        touchableOpacityView2: {
            width:260,
            height:50,
            alignItems: "center",
            justifyContent: "center"
        }
    }
)
