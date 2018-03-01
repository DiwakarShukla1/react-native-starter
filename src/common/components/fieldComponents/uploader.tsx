import React, { Component } from 'react';
import {View, Text, Item, Label} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

class ImageUploader extends Component {
    state={uploadedUrl:'',selectedFiled:false}
    render() {
        const showUpload = this.state.selectedFiled 
                            ? <Text>Image</Text> 
                            : <TouchableOpacity onPress={()=>this.handleUploadPress.bind(this)}>
                                <FontAwesome name="upload" size={12}/>
                              </TouchableOpacity>
        return (
            <Item stackedLabel>
                <Label>Select Image</Label>
                {showUpload}
            </Item>
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
        ImagePicker.showImagePicker(options, (response) => {            
            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }
            else {
             const source = { uri: 'data:image/jpeg;base64,' + response.data };          
              console.log("uploaded",source)
            }
          });
    }
}

export default ImageUploader;