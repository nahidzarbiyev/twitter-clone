import { createBrowserRouter } from "react-router-dom";
import Home from '@/pages/home'
import Explore from '@/pages/explore'
import Notification from '@/pages/notifications'
import MainLayout from "@/layouts/main";
import Profile from "@/pages/profile";
import Messages from "@/pages/messages";
import Lists from "@/pages/lists";
import Bookmarks from "@/pages/bookmarks";
import Verified from "@/pages/verified";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'explore',
                element:<Explore/>
            },
            {
                path:'notifications',
                element:<Notification/>
            },
            {
                path:'messages',
                element:<Messages/>
            },
            {
                path:'lists',
                element:<Lists/>
            },
            {
                path:'bookmarks',
                element:<Bookmarks/>
            },
            {
                path:':slug',
                element:<Profile/>
            },
            {
                path:'verified-choose',
                element:<Verified/>
            },
            {
                path:'*',
                element:'not-found'
            }
        ]
    },
   
])

export default routes