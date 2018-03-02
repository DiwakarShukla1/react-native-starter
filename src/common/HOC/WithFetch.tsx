import * as React from 'react';
import { Loader } from '../components';

interface Props {
    loadingMessage?: string;
}

interface State {
    data : any[],
    loading: boolean
}

function WithFetch (WrapComponent: any, api: Function) {
    return class extends React.Component <Props, State> {
        state = {
            data : undefined,
            loading : true
        };
    
        constructor (props: any) {
            super(props);
        }
    
        async componentWillMount () {
            const data = await api();
            this.setState({data, loading : false});
        }
    
        render () {
            const { loadingMessage } = this.props;
            if (this.state.loading) { return <Loader message={loadingMessage}/> }

            return <WrapComponent {...this.props}/>;
        }
    }
}

export default WithFetch;