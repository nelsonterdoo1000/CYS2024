import { useEffect } from 'react'
import { apiPrivate } from '../../api/api'
import useRefreshToken from './useRefreshToken'
import { useAuthContext } from '../State/AuthContext'

const useAxiosPrivate = () => {
    const { user } = useAuthContext()
    const refresh = useRefreshToken()

    useEffect(() => {

        const reqIntercept = apiPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${user.access_token}`
                }
            }, (err) => Promise.reject(err)
        );

        const resIntercept = apiPrivate.interceptors.response.use(
            response => response,
            async (err) => {
                const prevReq = err?.config
                if (err?.response?.status === 403 && !prevReq?.sent) {
                    prevReq.sent = true;
                    const newAccessToken = await refresh()
                    prevReq.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return apiPrivate(prevReq)
                }
                return Promise?.eject(err)
            }
        );
        return () => {
            apiPrivate.interceptors.response.eject(resIntercept);
            apiPrivate.interceptors.request.eject(reqIntercept);
        }
    }, [user, refresh])

    return apiPrivate
}

export default useAxiosPrivate