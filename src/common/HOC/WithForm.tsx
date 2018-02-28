import * as React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as SnackBar from "react-native-snackbar";
const Snackbar = SnackBar.default;

interface Props {
    data: any;
    header: string;
    onSuccess: () => {};
    invalid?: boolean;
}

interface State {
    submitting: boolean;
    error: string;
}

function WithForm (WrapComponent: any, formName: string, api: Function) {
    
    const WithReduxForm = reduxForm({
        form: formName,
        enableReinitialize : true
    })(WrapComponent);
    
    class SmartFormComponent extends React.Component <Props, State> {
        state = {
            submitting: false,
            error: undefined
        };
    
        constructor (props: any) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        async handleSubmit (invalid) {
            if (invalid === true) return;

            const values = this.props.data.values;
            this.setState({ submitting : true, error : undefined });
    
            try {
                const result = await api(values);
                console.log("form submission success",result)
                if (result.success) {
                    this.props.onSuccess(result.message);
                } else {
                    Snackbar.show({title : result.message, duration : Snackbar.LENGTH_INDEFINITE , action : { title : "DISMISS", color : "green" }});
                }
            } catch (error) {
                console.log("form error",error)
                Snackbar.show({title : error.message, duration : Snackbar.LENGTH_INDEFINITE , action : { title : "DISMISS", color : "green" }});                
            } finally {
                this.setState({submitting : false});
            }
        }
    
        render () {

            return (
                <WithReduxForm 
                    serverError={this.state.error}
                    loading={this.state.submitting} 
                    handleSubmit={this.handleSubmit}
                    {...this.props}
                />                               
            );
        }
    }

    const mapStateToProps = (state) => ({
        data: state.form[formName],
    });
    
    return connect(mapStateToProps)(SmartFormComponent);
}

export default WithForm;