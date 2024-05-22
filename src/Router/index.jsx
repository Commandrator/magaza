import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthProvider } from 'constexts/AuthContext';
import Store from 'pages/Store';
import useError from '../hooks/useError';
import Public from 'layers/public';
import Signin from 'pages/Auth/Signin';
import Signup from 'pages/Auth/Signup';
import Recovery from 'pages/Auth/Recovery';
import Auth from 'layers/auth';
const Provider = () => {
    const {Page404} = useError();
    const router = createBrowserRouter([
        {
            path: "/",
            Component:Public,
            errorElement:<Page404/>,
            children: [
                {
                    index:true,
                    Component: Store
                }
            ]
        },
        {
            path: "auth",
            Component:Auth,
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