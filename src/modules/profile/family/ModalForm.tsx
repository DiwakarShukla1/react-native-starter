import React from 'react';
import {Modal} from '../../../common/components';
import Form from './form';
import {Container, Content, View, Text} from 'native-base';
import FamilyList from './FamilyList';
import { Colors } from '../../../common/config/index';

interface Props {
    showLoader:boolean,
    familyMembers:any[],
    title:string,
    onSuccess:()=>{},
    modalVisible:boolean,
    onCloseModal:()=>{},
    noDataMessage:string
}

const ModalForm = (props:Props) => {
    console.log("props received",props)
    const modal = props.modalVisible ? <Modal modalVisible={props.modalVisible}
                                              title="Family Member Details"  
                                              onCloseModal={props.onCloseModal}>
                                             <Form   
                                                id={props.id}
                                                initialValues={{...props.memberDetail}}                                                                                                
                                                />
                                       </Modal>                                       
                                     :<Content> 
                                        <FamilyList noDataMessage={props.noDataMessage} 
                                        data={props.familyMembers} 
                                        onEditPress={props.onEditPress}
                                        showLoader={props.showLoader}/>
                                        </Content>
    return modal;
};

export default ModalForm;