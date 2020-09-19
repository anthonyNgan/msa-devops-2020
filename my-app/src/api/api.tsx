import { IChiropractors } from '../common/Interface';

/*const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://chiropractor-api.azurewebsites.net/api/" : "https://localhost:44361/api/";*/
const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://localhost:44361/api/" : "https://chiropractor-api.azurewebsites.net/api/";
const Chiropractor_API_URL = API_BASE_URL + "chiropractors/";
const Chiropractor_ID_API_URL = `https://chiropractor-api.azurewebsites.net/api/chiropractors/{id}`;

export const getArray = async () => {

    const response = await fetch(Chiropractor_API_URL, {
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    }).then((res) => res.json());

    return response;

}

export const postArray = async (data: IChiropractors | {}) => {
    const response = await fetch(Chiropractor_API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    })
    return response.json()
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}

export const editArray = async (data: IChiropractors | {}) => {
    const response = await fetch(Chiropractor_API_URL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    })
    return response.json()
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}

export const deleteArray = async (data: IChiropractors | {}) => {

    const response = await fetch(Chiropractor_ID_API_URL, {
        method: 'Delete',
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
    })
    return response.json()
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
}