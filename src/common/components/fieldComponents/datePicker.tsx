import React, { Component } from 'react';
import {View, Item, Label, Text} from 'native-base';
import { TouchableOpacity, DatePickerAndroid } from 'react-native';
import moment from 'moment';
import {Colors} from '../../config';

class FormDatePicker extends Component {
    state={selectedDob:''}
    render() {
        const {input, label, placeholder, type, required, meta: { touched, error, warning }} = this.props;
        const hasError = touched && error;
        const errorComponent = hasError ? <Text style={{marginLeft: 16, color: Colors.colorDanger}}>{error}</Text> : null;
        const selectedDate = input.value ? input.value :"Select DOB";

        return (
            <View style={{marginLeft:16,marginTop:10}}>
                <Label>{label}</Label>
                <TouchableOpacity onPress={this.handleDatePicker.bind(this)}>
                    <Text style={{marginTop:8,color: selectedDate=="Select DOB" ? Colors.colorGray : '#000'}}>{selectedDate}</Text>
                </TouchableOpacity>
                {errorComponent}
            </View>
        );
    }
    async handleDatePicker() {
        try {
            const datemin = moment().toDate();  
            const {action, year, month, day} = await DatePickerAndroid.open({ 
                maxDate:datemin,
                mode : 'spinner'
            });
            if(action !== DatePickerAndroid.dismissedAction) {
                const dob = `${day}/${month+1}/${year}`
                this.setState({selectedDob:dob});
                this.props.input.onChange(dob);
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default FormDatePicker;