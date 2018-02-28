import React from 'react';
import {View, Text, Item} from 'native-base';
import {Colors} from '../../config';
import {Switch} from 'react-native';

const CheckBox = (props)=>{
    const {input, label, placeholder, type, required, meta: { touched, error, warning }} = props;
    const hasError = touched && error;
    const errorComponent = hasError ? <Text style={{marginLeft: 16, color: Colors.colorDanger}}>{error}</Text> : null;
    return (
        <View style={{marginLeft:16,marginTop:10}}>
            <Text>{label}</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Switch value={input.value == "true" ? true : false} onValueChange={(value)=>input.onChange(`${value}`)} />
                <Text>{props.boxText}</Text>
            </View>
            {errorComponent}
        </View>
    );
};

export default CheckBox;