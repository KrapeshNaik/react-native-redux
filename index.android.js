import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { helloSaga } from './src/sagas';
import reducer from './src/components/Devices/reducer';
import Devices from './src/components/Devices/component';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// Run saga
sagaMiddleware.run(helloSaga);

export default class TextProj extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Devices />
                </View>
            </Provider>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('TextProj', () => TextProj);