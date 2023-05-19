// import Axios from 'utils/axios';
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

export { documentSubmit };



// import axios from 'axios';
// // export const SERVER_URL = 'http://localhost:8080/';
// export const SERVER_URL = 'https://api.zionlabs.info/';

// const API = async (method = 'GET', url, data = {}) => {
//     try {
//         const response = await axios({
//             method,
//             url: `${SERVER_URL}api/${url}`,
//             data,
//             headers: { "Content-Type": "multipart/form-data" },
//         });

//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// };

// export default API;