import { API_URL } from '../configs/env.config.js';
import { fetchData } from '../utilities/fetchUtility.js';

export const login = async (email, password) => {
    const response = await fetchData(
        `${API_URL}/login`,
        'POST',
        { email, password }
    );
    return await response.json();
}

// export const session = async () => {
//     const response = await fetchData(
//         `${API_URL}/session`
//     );
//     return response;
// }

export const logout = async () => {
    const response = await fetchData(
        `${API_URL}/logout`,
        'POST'
    );
    return response;
}