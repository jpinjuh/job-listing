import http from './http'

export async function getData (url) {
  const response = await http.get(url);

  return response.data;
}