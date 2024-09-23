import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import NewsPage from "../pages/newsPage/NewsPage";
import BbaPage from "../pages/bbaPage/BbaPage";
import MasterBePage from "../pages/masterBePage/MasterBePage";
import PartnerPage from "../pages/partnerPage/PartnerPage";
import Footer from "../components/footer/Footer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/news",
                element: <NewsPage/>
            }, 
            {
                path: "/education",
                element: <PartnerPage/>
            },            
            {
                path: "/education/:partner",
                element: <MasterBePage/>
            },             
            {
                path: "/bachelor",
                element: <BbaPage/>
            },            {
                path: "/masterbusiness",
                element: <MasterBePage/>
            },           
            {
                path: "/partner",
                element: <PartnerPage/>
            },
        ]
    }
])

const AppRouter = () => {
    return <RouterProvider router={router}/>
}

export default AppRouter;