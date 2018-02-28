import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {ProfileService} from '../../common/services';
import StepIndicator from '../../common/components/StepIndicator';
import {customStyles, StepLabels, WizardItems} from './wizardConfig';
import {headers} from '../../common/config';

class ProfitoWizard extends Component {
    static navigationOptions ={header:null};
    state = {currentPosition:0}

    async componentWillMount() {
        try {
            let currentPosition;
            const response = await ProfileService.getStep();
            if(response.success) {
               currentPosition = response.data.stepCompleted+1;
            }else {
               currentPosition=0
            }
            this.setState({currentPosition});
        } catch (error) {
            console.log("response",error)
        }

    }
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