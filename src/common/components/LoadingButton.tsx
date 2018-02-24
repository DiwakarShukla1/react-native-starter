import { Button, Text } from "native-base";
import * as React from "react";
import { ActivityIndicator } from "react-native";

interface Props {
    isLoading? : boolean;
    children: any;
    onPress: Function;
    disabled: boolean;
}

const LoadingButton = (props: Props) => {
    const { isLoading, children }: Props = props;
    const loader = isLoading ? <ActivityIndicator size={30} style={{marginLeft : 20}}/> : null; 

    return (<Button onPress={props.onPress} style={{marginHorizontal : 16}} {...props} block>
            <Text>
                {children}
            </Text>
            {loader}
        </Button>);
};

export default LoadingButton;