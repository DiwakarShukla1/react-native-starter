import React from 'react';
import {View, Text, Item, Label} from 'native-base';
import {Colors} from '../../config';
import {Switch} from 'react-native';

const CheckBox = (props)=>{
    const {input, label, placeholder, type, required, meta: { touched, error, warning }} = props;
    const hasError = touched && error;
    const errorComponent = hasError ? <Text style={{marginLeft: 16, color: Colors.colorDanger}}>{error}</Text> : null;
    return (
        <Item stackedLabel>
            <Label>{label}</Label>
            <View style={{flexDirection:'row',paddingTop:12,alignSelf:'flex-start'}}>
                <Switch value={input.value == "true" ? true : false} onValueChange={(value)=>input.onChange(`${value}`)} />
                <Text>{props.boxText}</Text>
            </View>
            {errorComponent}
        </Item>
    );
};

export default CheckBox;