import axios from 'axios';

 const callApi = async(method, url, data) =>{
  return await axios({
      method: method,
      url: 'http://localhost:3001' + url,
      data: data,
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          'Content-Type': 'application/json;multipart/form-data'
      }
  }).catch(function (error) {
      console.log(error);
  });
}

export default callApi;
