import React, { Component } from 'react';
import {View, Text, Item, Label, Image} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import {UploadService} from '../../services';

class ImageUploader extends Component {
    state={uploadedUrl:'',selectedFiled:false}
    render() {
        const showUpload = this.state.selectedFiled 
                            ? null
                            : <TouchableOpacity onPress={this.handleUploadPress.bind(this)}>
                                <FontAwesomeIcon name="upload" size={12}/>
                              </TouchableOpacity>
        const selectedImg = this.state.selectedFiled ? <Image source={this.state.uploadedUrl}  style={{height:100,width:100}}/> : null
        return (
            <View>
                <Item stackedLabel>
                    <Label>Select Image</Label>
                    {showUpload}
                </Item>
                {selectedImg}
            </View>
        );
    }

    handleUploadPress() {
        const options = {
            title: 'Select Avatar',           
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, async (response) => {            
            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }
            else {
               this.uploadImage(response)
            }
        });
    }
    async uploadImage(response) {
        //let source = { uri: response.uri };
        //this.setState({uploadedUrl: source, selectedFiled:true});
        const obj = {
            uri : response.uri,
            type : response.type,
            name : response.fileName
        };
        // try {            
        //     const uploadResponse = await UploadService.uploadFile(obj)
        //     console.log("response",uploadResponse)  
        // } catch (error) {
        //     console.log("upload error",error)
        // }
    }
}

export default ImageUploader;