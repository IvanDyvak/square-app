export default async function getData() {
  return fetch(`https://demo7919674.mockable.io`).then(response => {
    const result = response.json();
    return result;
  });
}
