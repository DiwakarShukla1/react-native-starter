import HttpService from "../services/HttpService";

// const API_SERVER = "http://192.168.0."

export function sign(file, folder) {
    const URL = `sign_s3?file_name=${file.name}&file_type=${file.type}&folder=${folder}`;
    return HttpService.get(URL);
}

function uploadFileToS3(file, signedRequest, url) {

  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.setRequestHeader('Content-Type', file.type);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(url);
        } else {
          reject('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  });
};

const uploadFile = async (file: any) => {
  const signedUrl: any =  await sign(file, "photos");
  return uploadFileToS3(file, signedUrl.signed_request, signedUrl.url);
};

const obj = { uploadFile };

export default obj;
