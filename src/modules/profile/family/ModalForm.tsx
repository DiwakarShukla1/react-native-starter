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
    return(
       <Container>
           <Content>
                <FamilyList noDataMessage={props.noDataMessage} 
                data={props.familyMembers} 
                onEditPress={props.onEditPress}
                showLoader={props.showLoader}/>
           </Content>
       </Container>
    );
};

export default ModalForm;