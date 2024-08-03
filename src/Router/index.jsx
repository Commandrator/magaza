import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthProvider } from 'constexts/AuthContext';
import Main from 'pages/Store/Main';
import useError from '../hooks/useError';
import Public from 'layers/public';
import Signin from 'pages/Auth/Signin';
import Signup from 'pages/Auth/Signup';
import Recovery from 'pages/Auth/Recovery';
import Auth from 'layers/auth';
import Search from 'pages/Store/Search';
const Provider = () => {
    const {Error} = useError();
    const router = createBrowserRouter([
        {
            path: "/",
            Component:Public,
            errorElement:<Error/>,
            children: [
                {
                    index:true,
                    Component: Main
                },
                {
                    path: "/search",
                    Component:Search
                }
            ]
        },
        {
            path: "auth",
            Component:Auth,
            errorElement:<Error/>,
            children: [
                {
                    index:true,
                    element: <Navigate  to="/auth/signin" replace={true} />
                },
                {
                    path: "signin",
                    Component: Signin
                },
                {
                    path: "signup",
                    Component: Signup
                },
                {
                    path: "recovery",
                    Component:Recovery
                }
            ],
        }
    ]);
    return (<AuthProvider children={<RouterProvider router={router}/>}/>)
}
export default Provider;