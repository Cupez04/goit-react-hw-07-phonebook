import axios from "axios";
const BASEURL = 'https://64c813bba1fe0128fbd59e33.mockapi.io/';

export const apiFetch = axios.create({
    Base_URL:  'https://64c813bba1fe0128fbd59e33.mockapi.io/api/v1'
});


//metodo Get consulta
export const getContacts = async () => {
    const {data} = await apiFetch.get(`${BASEURL}/contacts`);
    return data;
};

//metodo Post consulta
export const addContacts = async contact => {
    const {data} = await apiFetch.post(`${BASEURL}/contacts`,contact);
    return data;
}

//metodo Delete consulta 
export const deletContacts = async id => {
    const {data} = await apiFetch.delete(`${BASEURL}/contacts/${id}`);
    return data;
}
