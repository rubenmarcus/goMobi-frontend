import FetchService from './fetch.service';

export default async function AUTHSERVICE(userData) {
  const url = 'https://gomobi-api.azurewebsites.net/api/v1/users/authenticate';

  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return FetchService(url, options);
}


