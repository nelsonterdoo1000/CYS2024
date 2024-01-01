import { useAuthContext } from '../State/AuthContext'
import api from '../../api/api'

const useRefreshToken = () => {
    const { user,setUser } = useAuthContext()


    const refresh = async () => {
        const res = await api.get(`/reg/login/`, {
            username: user.username,
            password: user.password
        })
        setUser(prev => {
            return { ...prev, user: res.data.user, access_token: res?.data?.access, role: res?.data?.user_type }
        })
        return res.data.access
    }
    return refresh
}

export default useRefreshToken