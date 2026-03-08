
import useSWR from "swr";
import api from "../../config/api";
import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    const { data: user, error, mutate } = useSWR( token ? '/api/user' : null, () => api.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data)
    );

    const login = async (datos, setErrors) => {
        try {
            const response = await api.post('/api/login', datos);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }
    const register = async (datos, setErrors) => {
        try {
            const response = await api.post('/api/register', datos);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            // setErrors(Object.values(error.response.data.errors));
            setErrors(error.response.data.errors);
        }
    }
    const logout = async () => {
        try {

            await api.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('AUTH_TOKEN');

            await mutate(null);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        if ( middleware === 'guest' && url && user ) {
            navigate(url);
        }
        if ( middleware === 'auth' && (error || !token ) ) {
            localStorage.removeItem('AUTH_TOKEN');
            navigate('/auth/login');
        }

    },[user, error, token]);

    return {
        login,
        register,
        logout,
        user,
        error
    }

}

export default useAuth;