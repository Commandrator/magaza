import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from 'pages/Main';
import useError from '../hooks/useError';
const Provider = () => {
    const {Page404} = useError();
    const router = createBrowserRouter([
        {
        path: "/",
        element: <Main />,
        errorElement:<Page404/>
        },
        {
            path:"/Auth",
            element: <Main />,
            errorElement:<Page404/>,
            children: [
                {
                    path: "signin",
                    element: <Main />
                },
                {
                    path: "signup",
                    element: <Main />
                },
                {
                    path: "recovery",
                    element: <Main />
                }
            ],
        }
    ]);
    return <RouterProvider router={router}/>
}
  export default Provider;