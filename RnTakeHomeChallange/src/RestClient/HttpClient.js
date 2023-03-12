import axios from 'axios';

const httpClient = async ({url, method, headers, data}) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      headers: {
        ...headers,
      },
      data,
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          resolve(response?.data);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        console.log(url, data, 'error', error?.response);
        reject(error);
      });
  });
};

export default httpClient;
