import http from './http';

export async function getData (url) {
  const response = await http.get(url);

  console.log(response)

  return response.data;
}