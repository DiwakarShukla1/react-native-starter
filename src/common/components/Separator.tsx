import * as React from 'react';
import { View } from 'react-native';
import { Colors } from '../config';

interface Props {

}

const Separator = (props: Props) => {
    return (
        <View style={{borderWidth: 0.5, borderColor : Colors.colorGray}}>
        </View>
    );
};

export default Separator;