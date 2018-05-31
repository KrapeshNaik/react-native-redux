const defaultState = {
    loading: true,
    devices: [{
        a: true,
        b: false
    }]
};

/**
 * @reducers
 */
export default DevicesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ALL_DEVICES':
            return {
                ...state,
                loading: false
            };

        default: 
            return {
                ...state
            };
    }
}

/**
 * @actions
 */
export const getDevicesAction = () => {
    return {
        type: 'ALL_DEVICES',
    }
}

export const getDevice1 = () => {
    return {
        type: 'DEVICE_1'
    }
}