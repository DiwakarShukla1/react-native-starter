import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator} from 'react-native';
import { Colors } from "../config";
import {Text, Card, CardItem} from 'native-base';

interface Props {
    isLoading : boolean,
    data : any[],
    noDataMessage:string,
    disableSeperator:boolean
}

interface State {

}

const Seperator = () => {
    return <View style={{borderWidth: 0.5, borderColor : Colors.colorGray}}>
           </View>
};

function WithFetchList(WrappedComponent:any) {
    return class extends Component <Props, State> {
        render () {
            return (
                <View style={{flex : 1}}>
                   {this.renderContent()} 
                </View>
            );
        }

        _keyExtractor = (item: any, index: number) => item.id || index;

        renderContent () {
            const isNoData = this.props.data.length ==0;
            if (this.props.isLoading) return <ActivityIndicator/>;
            else return isNoData ? <Card>
                                        <CardItem>
                                            <Text>{this.props.noDataMessage ? this.props.noDataMessage : "No Data Found"}</Text>
                                         </CardItem>
                                    </Card>
                                 : <FlatList
                                     data={this.props.data}
                                     keyExtractor={this._keyExtractor}
                                     ItemSeparatorComponent={() => this.props.disableSeperator? null : <Seperator/> }
                                     renderItem={({item}) => <WrappedComponent {...item} {...this.props}/>}
                                    />;
        }
    }
}

export default WithFetchList;