import UserList from './components/UserList'
import Login from './components/Login'

export default [
    {
        path: '/home',
        component: UserList
    },
    {
        path: '/',
        component: Login
    },
    {
        path: '*',
        redirect: '/'
    }
]
