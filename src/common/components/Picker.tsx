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
        return <Item label={m.label} value={m.value} />
    }) 
    return (
        <View>
            <Picker
            mode="dropdown"
            placeholder="Select One"
            selectedValue={props.selected2}
            onValueChange={props.onValueChange}
            >          
          </Picker>
            {errorComponent}
        </View>
    );
};

export default PickerField;
