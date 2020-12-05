export async function getData () {
  const response = await fetch('data.json');

  if(!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}
