import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    submitStory() {

    }

    render() {
        return (
            <View style={styles.inputView}>
                <TextInput style={styles.inputBox} placeholder="Story Title" />
                <TextInput style={styles.inputBox} placeholder="Author" />
                <TextInput style={styles.inputBox} placeholder="Write Your Story" multiline={true} />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText: {
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    },
    inputView: {
        flexDirection: 'row',
        margin: 20
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
    },
    scanButton: {
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    },
    submitButton: {
        backgroundColor: '#FBC02D',
        width: 100,
        height: 50
    },
    submitButtonText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    }
});