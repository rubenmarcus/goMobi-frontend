import FetchService from "./fetch.service"

export const AUTHSERVICE = (userData) => {
    const options = { method: 'POST' },

    return FetchService.call(userData, options);

}