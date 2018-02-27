import React, { Component } from 'react';
import {View, Text} from 'react-native';
import StepIndicator from '../../common/components/StepIndicator';
import {customStyles, StepLabels, WizardItems} from './wizardConfig';
import {headers} from '../../common/config';

class ProfitoWizard extends Component {
    static navigationOptions ={header:null};
    state = {currentPosition:0}

    render() {
        const wizardItem = WizardItems[this.state.currentPosition];
        return (
            <View style={{flex:1}}>
                <View style={{height:60,marginTop:16}}>
                    <StepIndicator
                        onPress={this.onPageChange.bind(this)}
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={StepLabels}
                    />
                </View>
                <View style={{flex:1}}>
                    {wizardItem}
                </View>
            </View>
        );
    }

    onPageChange(position){
        this.setState({currentPosition: position});
    }
}

export default ProfitoWizard;