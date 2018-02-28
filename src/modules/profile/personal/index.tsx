import React, { Component } from 'react';
import Form from './form';
import {ProfileService} from '../../../common/services';
import {connect} from 'react-redux';
import {ProfileObj} from '../../../common/types'

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {
                email:'',
                buildingSize:'',
                yearOfBuildingConstruction:'',
                stateOfResidence:'',
                nameOfOwner:'',
                contactNumberOfOwner:'',
                emailOfOwner:'',
                facebook:'',
                contactNumber:'',
                firstName:'',
                address:'',
                lastName:'',
                buildingName:''
            },
            showLoader:undefined
        }
    }
    
    componentWillMount() {
        this.fetchProfile()    
    }

    async fetchProfile() {
        this.setState({showLoader:true});
        try {
            const response = await ProfileService.getProfile();
            let {buildingSize,yearOfBuildingConstruction,stateOfResidence,email,nameOfOwner,contactNumberOfOwner,emailOfOwner,facebook,contactNumber,firstName,address,lastName,buildingName} = response.data
            buildingSize = `${buildingSize}`
            yearOfBuildingConstruction = `${yearOfBuildingConstruction}`
            const personalInfo = {buildingSize,yearOfBuildingConstruction,email,stateOfResidence,nameOfOwner,contactNumberOfOwner,emailOfOwner,facebook,contactNumber,firstName,address,lastName,buildingName}
            this.setState({personalInfo,showLoader:false});
        } catch (error) {
            this.setState({showLoader:false})
            console.log("error",error);
        }
    }

    render() {
        const {personalInfo} = this.state
        return (
            <Form
                onSuccess={this.handleNextStep.bind(this)}
                formData={this.props.formData} 
                initialValues={{...personalInfo}} />
        );
    }
    handleNextStep(message) {
        console.log("success Message",message)
    }
}

const mapStateToProps = (state)=>({
    formData : state.form.personalForm
});

export default connect(mapStateToProps)(PersonalInfo);