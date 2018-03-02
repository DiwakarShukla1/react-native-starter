import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {

}

interface State {

}

export default class PlayGround extends React.Component <Props, State> {

    state = {
    
    };

    constructor (props: any) {
        super(props);
    }

    componentWillMount () {
    
    }

    render () {
        return (
            <View>
                <Text>
                    PlayGround
                </Text>
            </View>
        );
    }
}