import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Label, Item, Text, Picker} from "native-base";
import { Colors } from '../config';

const styles = StyleSheet.create({
    clearfix : {
        marginBottom : 8
    }
});

const PickerField = (props) => {
    const {input, label, pickerItems ,placeholder, type, required, meta: { touched, error, warning }} = props;
    const hasError = touched && error;
    const errorComponent = hasError ? <Text style={{marginLeft: 16, color: Colors.colorDanger}}>{error}</Text> : null;
    const items = pickerItems.map((m)=>{
        return <Item style={{paddingLeft:0}} label={m.label} value={m.value} />
    }) 
    return (
        <View style={{marginLeft:16,marginTop:16}}>
            <Picker
            mode="dropdown"
            placeholder="Select One"
            {...input} selectedValue={input.value} onValueChange={(value) => input.onChange(value)} children={props.children}
            >         
            {items} 
          </Picker>
            {errorComponent}
        </View>
    );
};

export default PickerField;
