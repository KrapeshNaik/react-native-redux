import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { getDevicesAction } from './reducer';

class Devices extends Component {
    render() {
        const {
            devices
        } = this.props;

        return (
            <View>
                <Button
                    onPress={this.props.getDevices}
                    title="Refresh"
                    color="#841584" />

                <Text>{`dssd_${this.props.loading}`}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDevices: () => {
            dispatch(getDevicesAction());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Devices);