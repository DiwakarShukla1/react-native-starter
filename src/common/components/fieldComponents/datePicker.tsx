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
        const selectedDate = input.value ? moment(input.value).format("DD/MM/YY") :"Select DOB";

        return (
            <Item stackedLabel>
                <Label>{label}</Label>
                <TouchableOpacity style={{paddingTop:12,alignSelf:'flex-start'}} onPress={this.handleDatePicker.bind(this)}>
                    <Text style={{color: selectedDate=="Select DOB" ? Colors.colorGray : '#000'}}>{selectedDate}</Text>
                </TouchableOpacity>
                {errorComponent}
            </Item>
        );
    }
    async handleDatePicker() {
        try {
            const datemin = moment().toDate();  
            const {action, year, month, day} = await DatePickerAndroid.open({ 
                maxDate:datemin,
                date:moment(this.props.input.value).toDate(),
                mode : 'spinner'
            });
            if(action !== DatePickerAndroid.dismissedAction) {
                const dob = `${day}/${month+1}/${year}`
                this.setState({selectedDob:dob});
                this.props.input.onChange(moment(dob).format("YYYY/MM/DD"));
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default FormDatePicker;