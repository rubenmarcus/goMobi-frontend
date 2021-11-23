import FetchService from './fetch.service';

export async function USERBALANCE(token) {
  const url = 'https://gomobi-api.azurewebsites.net/api/v1/users/balance';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return FetchService(url, options);
}

export async function USEREXTRACT(token) {
  const url = 'https://gomobi-api.azurewebsites.net/api/v1/users/extract';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return FetchService(url, options);
}

export async function USERTRANSFERENCE(token, cpf, amount) {
  const url = 'https://gomobi-api.azurewebsites.net/api/v1/users/transference';

  const obj = {
    cpf: cpf,
    amount: amount,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  };

  return FetchService(url, options);
}
