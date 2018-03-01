import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../config'

const RNModal = (props)=>{
    return(
        <Modal
            animationType="fade"
            transparent={false}            
            visible={props.modalVisible}
            onRequestClose={() =>props.onCloseModal()}
        >            
            <View style={{height:50,backgroundColor:Colors.colorPrimary,flexDirection:'row'}}>
                <ModalClose onCloseModal={props.onCloseModal}/>
                <ModalTitle title={props.title}/>
            </View>
            {props.children}
        </Modal>
    );
};

const ModalTitle = (props) => {
    return(
        <View style={{justifyContent:'center',flex:5,alignItems:'center'}}>
            <Text style={{color:Colors.white}}>{props.title}</Text>
        </View>
    );
};

const ModalClose = (props) => {
    return(
        <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>props.onCloseModal()}>
                <FontAwesomeIcon name="close" size={20} color={Colors.white}/>
            </TouchableOpacity>
        </View>
    )
}
export default RNModal;