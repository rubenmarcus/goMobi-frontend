/* Generic Fetch Service */

export default async function FetchService(url, options) {
  try {
    const response = await fetch(url, options);

    return await response.json();

  } catch (err) {
    return err;
  }
};