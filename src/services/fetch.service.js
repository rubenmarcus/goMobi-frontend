/* Generic Fetch Service */

const FetchService = {
    call: async (url, options) => {
      try {
        const response = await fetch(url, options);
        return  await response.json();
        
      } catch (err) {
        console.error(error);
      }
    },
  };
  export default FetchService;
  