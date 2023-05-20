import Axios from 'utils/axios';
import axios from "axios";
import { BASE_URL } from 'config';

// ==============================|| Auth actions ||============================== //
const documentSubmit = async (values: any) => {
    const data = await axios({
        method: "POST",
        url: `${BASE_URL}/api/app/documentSubmit`,
        data: values,
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};
const loadAlldocuments = async (email: String) => {
    const data = await Axios.post('api/app/loadDcouments', { email });
    return data;
};
const getChatText = async (message: String, prompt: String) => {
    const data = await Axios.post('api/app/getChatText', { message, prompt });
    return data;
};

export { documentSubmit, loadAlldocuments, getChatText };