
import axiosClient from '../api/axiosClient';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {

        const response = await axiosClient.get('/users/refresh-token', {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.data.jwtToken);
            return {
                ...prev,
                roles: [1984],
                accessToken: response.data.data.jwtToken
            }
        });

        return response.data.data.jwtToken;
    }
    return refresh;
};

export default useRefreshToken;