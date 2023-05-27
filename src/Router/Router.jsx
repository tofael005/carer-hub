import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Statistic from "../Pages/Statistic";
import AppliedJob from "../Pages/AppliedJob";
import JobDetails from "../Pages/JobDetails";
import Error from "../Pages/Error";
import LoderAplied from "../Pages/LoaderAplied";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader:() => fetch("featuredList.json")
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/job-details/:id',
                element: <JobDetails/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/statistic',
                element: <Statistic/>
            },
            {
                path: '/appliedjob',
                element: <AppliedJob/>,
                loader: LoderAplied
            },
        ]
    },
    {
        path: "*",
        element: <Error/>
    }
])



export default Router;