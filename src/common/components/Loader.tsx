import * as React from 'react';
import { View } from "react-native";
import { Text } from "native-base";

interface Props {
    message?: string;
}

const Loader = ({message}: Props) => {
    return (
        <View>
            <Text>{message || 'Loading please wait..'}</Text>
        </View>
    );
};

export default Loader;