import React, { Component } from 'react';
import Form from './form';
import {DatePickerAndroid} from 'react-native';
import ModalForm from './ModalForm';
import {FamilyMemberService} from '../../../common/services';

interface Props {
    onSuccess:()=>{};
}
class FamilyInfo extends Component<Props> {
    state={ modalVisible:undefined,familyMembers:[],showLoader:true,member:{id:null}}
    
    componentWillMount() {
        this.fetchFamilyMembers()
    }

    async fetchFamilyMembers() {
        try {
            const response = await FamilyMemberService.getAllMyFamilyMembers();
            if(response.success) {
                this.setState({
                    familyMembers:response.data,
                    showLoader:false,
                    modalVisible:response.data.length==0
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
                id={this.state.member.id}
                memberDetail={this.state.member}
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

    handleEdit(obj:any) {
        console.log("edit this",obj);
        const {dateOfBirth, firstName, gradeOfSchool, isStudent, lastName, nameOfSchool, relationWithYou, _id} = obj;
        const member = {
            dateOfBirth, firstName, gradeOfSchool, isStudent, lastName, nameOfSchool, relationWithYou, 
            id:_id
        }
        this.setState({member,modalVisible:true});
    }

    handleModalClose() {
        const modalVisible = !this.state.modalVisible
        this.setState({modalVisible});
    }

    handleAddFamilySuccess(message) {

    }
}

export default FamilyInfo;