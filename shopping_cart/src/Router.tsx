import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App'
import Home from './components/Home'
import Shop from './components/Shop'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                }
            ],
            errorElement: "/"
        }
    ])

    return <RouterProvider router={router} />
}

export default Router