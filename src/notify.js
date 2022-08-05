import React, {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react';

import {
    Animated,
    Text,
    View,
} from 'react-native';

const Message = (props) => {
    const opacity = useRef(new Animated.Value(0))
        .current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(props.duration ? props.duration : 5000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            props.onHide();
        });
    }, [props.message]);

    const _getColor = (color) => {
        if (color == 'success') {
            return '#228B22';
        } else if (color == 'error') {
            return '#FF0000';
        } else if (color == 'info') {
            return '#FA4D68';
        } else {
            return '#fff';
        }
    }

    const _getTextColor = (color) => {
        if (color == 'success') {
            return '#fff';
        } else if (color == 'error') {
            return '#fff';
        } else if (color == 'info') {
            return '#fff';
        } else {
            return '#000';
        }
    }

    return (
        <Animated.View
            style={{
                opacity,
                transform: [
                    {
                        translateX: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-20, 0],
                        }),
                    },
                ],
                margin: 10,
                marginBottom: 5,
                backgroundColor: props.type ? _getColor(props.type) : 'white',
                padding: 15,
                borderRadius: 4,
                shadowColor: props.type ? _getTextColor(props.type) : '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
                elevation: 6,
                zIndex: 100,
                position: 'absolute',
                top: props.position == 'top' ? 45 : undefined,
                bottom: props.position == 'bottom' ? 70 : undefined,
                left: props.message ? 0 : undefined,
                right: props.message ? 0 : undefined,
            }}
        >
            <Text style={{
                color: props.type ? _getTextColor(props.type) : '#000',
                fontFamily: 'OpenSans-Bold',
                fontSize: 12,
            }}>{props.message}</Text>
        </Animated.View>
    );
};

const Notify = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        sendMe: ({ message, type, duration, position }) => {
            setMessage(message);
            setType(type);
            setDuration(duration);
            setPosition(position);
        }
    }));
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [position, setPosition] = useState('');
    const { sendHide } = props;

    if (!message) {
        return null;
    }

    return (
        <Message
            message={message}
            type={type}
            duration={duration}
            position={position}
            onHide={() => setMessage('')}
        />
    );
});

export default Notify
