import * as React from 'react';
import { Text } from "native-base";
import { Colors } from '../../../common/config';

interface Props {

}

const RegistrationSuccess = (props: Props) => {
    return <Text style={{color : Colors.colorSuccess, marginHorizontal : 16}}>{props.successMessage}</Text>
};

export default RegistrationSuccess;