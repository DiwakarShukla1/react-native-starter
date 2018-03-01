// import Config from '../config';
// import HttpService from "../services/HttpService";

/* tslint:disable */
// const Window: any = window;

// tslint:disable-next-line:typedef
const API_SERVER_URL = 'http://192.168.0.112:3001/';

export function sign_and_upload(file, progressHandler, folder) {
    return new Promise( (resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET',  API_SERVER_URL + 'sign_s3?file_name=' + file.name + '&file_type=' + file.type + '&folder=' + folder);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            upload_file(file, response.signed_request, response.url, resolve, reject, progressHandler);
          } else {
            reject('Could not get signed URL');
          }
        }
      };
      xhr.send();
    });
  }
  
function upload_file(file: any, signedRequest: any, url: any, resolve: any, reject: any,progressHandler: any) {
    // console.log(signedRequest);

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.setRequestHeader('mode', 'no-cors');

    xhr.upload.onprogress = (evt) => {
      if (evt.lengthComputable && progressHandler) {
        progressHandler((evt.loaded / evt.total)*100);
      }
    };
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(url);
      }
    };
  
    xhr.onerror = (err) => {
      reject(err);
    //   Window.error('Could not upload file. ' + err);
    };
  
    xhr.send(file);
    // HttpService.put()

  }


const uploadFile = async (file: any) => {
  const url =  await sign_and_upload(file, (data) => {console.log(data);}, "photos");
  return url;
};

const obj = { uploadFile };

export default obj;
