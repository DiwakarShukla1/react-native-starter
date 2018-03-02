import * as React from 'react';
import { Card, CardItem, Text } from "native-base";

interface Props {
    message?: string;
}

const NoDatFound = ({ message }: Props) => {
    return (
        <Card>
            <CardItem>
                <Text>{message || "No Data Found"}</Text>
            </CardItem>
        </Card>
    );
};

export default NoDatFound;