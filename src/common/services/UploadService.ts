import { RNS3 } from 'react-native-aws3';

const options = {
  keyPrefix: "photos/",
  bucket: "farmers.files",
  region: "us-east-1",
  accessKey: "AKIAJ5DH7L4B2YAYPX3A",
  secretKey: "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",
  successActionStatus: 201
}

const obj = {
  async uploadFile (file: any) {
    const response = await RNS3.put(file, options);
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3"); 
    console.log(response.body);  
  }
};

export default obj;