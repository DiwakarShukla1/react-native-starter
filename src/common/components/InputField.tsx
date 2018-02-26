import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Label, Item, Text } from "native-base";

const styles = StyleSheet.create({
    clearfix : {
        marginBottom : 8
    }
});

const InputField = (props) => {
    const {input, label, placeholder, type, required, meta: { touched, error, warning }} = props;
    const hasError = touched && error;
    const errorComponent = hasError ? <Text style={{marginLeft: 16, color: 'red'}}>{error}</Text> : null;
    return (
        <View>
            <Item floatingLabel error={hasError? true : false}>
                <Label>{label}</Label>
                <Input {...input} {...props} />
            </Item>
            {errorComponent}
        </View>
    );
};

export default InputField;