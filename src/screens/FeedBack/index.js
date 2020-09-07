import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FeedBack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FeedBack</Text>
            </View>
        );
    }
}
export default FeedBack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});