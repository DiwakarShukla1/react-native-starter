import React from 'react';
import {View, Text, Card, CardItem} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {WithList} from '../../../common/HOC';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../../common/config/index';

const FamilyList = (props)=>{
    return(
        <Card>
            <CardItem>
                <View style={{flexDirection:'row'}}>
                    <TextComponent text={`${props.firstName} ${props.lastName}`}/>
                    <TextComponent text={`${props.relationWithYou}`}/>
                    <EditFamily onEditPress={()=>props.onEditPress(props.id)}/>
                </View>
            </CardItem>
        </Card>
    )
};

const TextComponent = (props)=>{
    return(
        <View style={{flex:9}}>
            <Text>{props.text}</Text>
        </View>
    )
}

const EditFamily = (props) =>{
    return(
        <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPress={()=>props.onEditPress()}>
            <FontAwesomeIcon name="edit" color={Colors.colorPrimary}/>
        </TouchableOpacity>
    )
}
export default WithList(FamilyList);
