import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default function ActionButton(props) {
    return (
        <View style={styles.buttonContainer}>
            <Button title={props.title} onPress={props.onPress} color={"#d66a00"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    }
});
