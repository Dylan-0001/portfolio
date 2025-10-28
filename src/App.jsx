import {createBrowserRouter, RouterProvider} from "react-router";
import {Home} from "./pages/Home.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {Layout} from "./components/Layout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "*",
                element:<ErrorPage/>
            }
        ]
    }
]);

function App() {
  return (
        <RouterProvider router={router}/>
  )
}

export default App
