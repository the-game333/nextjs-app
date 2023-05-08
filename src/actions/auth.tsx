import Axios from 'utils/axios';
// ==============================|| Auth actions ||============================== //
const JoinWaitList = async (values: Object) => {
    const data = await Axios.post('api/auth/join_wait_list', values);
    return data;
};

export { JoinWaitList };
