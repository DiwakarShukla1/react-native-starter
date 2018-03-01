import HttpService from "../services/HttpService";

export function sign(file, folder) {
    const URL = `sign_s3?file_name=${file.name}&file_type=${file.type}&folder=${folder}`;
    return HttpService.get(URL);
}

const uploadFile = async (file: any) => {
  const signedUrl: any =  await sign(file, "photos");
  console.log(signedUrl);
  return HttpService.uploadResume(signedUrl, file)
};

const obj = { uploadFile };

export default obj;
