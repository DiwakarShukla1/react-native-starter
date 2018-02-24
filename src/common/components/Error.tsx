import * as React from 'react';
import { View } from 'react-native';
import { Text } from "native-base";

interface Props {
    message?: string;
}

const Error = ({ message }: Props) => {
    if (!message) return null; 

    return (
        <View>
            <Text>
                { message }
            </Text>
        </View>
    );
};

export default Error;