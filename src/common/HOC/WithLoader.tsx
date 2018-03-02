import * as React from 'react';
import { Loader } from '../components';

interface Props {
    loading: boolean;
    message?: string;
}

function WitLoader ( WrapComponent: any ) {
    return (props) => {
        const { loading, message }: Props = props;
        if (loading) return <Loader message={message} />

        return <WrapComponent {...props} />
    }
}

export default WitLoader;