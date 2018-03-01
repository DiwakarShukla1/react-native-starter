import React, { Component } from 'react';
import Form from './form';
import {DatePickerAndroid} from 'react-native';
import ModalForm from './ModalForm';
import {FamilyMemberService} from '../../../common/services';

interface Props {
    onSuccess:()=>{};
}
class FamilyInfo extends Component<Props> {
    state={ modalVisible:undefined,familyMembers:[],showLoader:false}
    
    componentWillMount() {
        this.setState({showLoader:true});
        this.fetchFamilyMembers()
    }

    async fetchFamilyMembers() {
        try {
            const response = await FamilyMemberService.getAllMyFamilyMembers();
            if(response.success) {
                this.setState({
                    familyMembers:response.data,
                    showLoader:false,
                    modalVisible:response.data ? response.data.length!=0 : true 
                });
            }else {
                this.setState({
                    familyMembers:[],
                    showLoader:false,
                    modalVisible:false,
                });
            }
        } catch (error) {
            this.setState({showLoader:false,familyMembers:[],modalVisible:true});
        }
    }

    render() {
        return (
            <ModalForm
                onEditPress={this.handleEdit.bind(this)}
                noDataMessage="No Family Members Found"
                showLoader={this.state.showLoader}
                familyMembers={this.state.familyMembers}
                title="Family Member Detail"
                onSuccess={this.handleAddFamilySuccess.bind(this)}
                modalVisible={this.state.modalVisible} 
                onCloseModal={this.handleModalClose.bind(this)}/>
        );
    }

    handleEdit(id:string) {
        console.log("edit this",id);
    }
    handleModalClose() {
        const modalVisible = !this.state.modalVisible
        this.setState({modalVisible});
    }

    handleAddFamilySuccess(message) {

    }
}

export default FamilyInfo;