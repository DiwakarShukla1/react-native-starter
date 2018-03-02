import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { NoDataFound, Separator } from '../components';

interface Props {
    data: any[];
    noDataMessage?: string;
    disableSeparator: boolean;
}

const _keyExtractor = (item: any, index: number) => item.id || index;

function WithFetchList(WrappedComponent:any) {
    return (props: Props) => {
        const { data, noDataMessage, disableSeparator }: Props = props;

        return data.length === 0 ? <NoDataFound message={noDataMessage} />
        : <FlatList
            data={data}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={() => disableSeparator ? null : <Separator/> }
            renderItem={({item}) => <WrappedComponent data={...item} {...props}/>}
        />;
    }
}

export default WithFetchList;