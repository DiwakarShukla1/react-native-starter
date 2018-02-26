import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from "native-base";
import { Colors } from "../config";

interface Props {
    children : any;
    onPress: () => void;
}

const Link = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{marginHorizontal : 16}}>
            <Text style={{color : Colors.colorPrimary}}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default Link;