import { routeEl } from "interfaces/routes";
import { lazy } from "react";
import { PATH_CONTROL1, PATH_DASHBOARD } from "./path";


const DashboardPage = lazy(() => import('pages/DashboardPage'))
const Control1Page = lazy(() => import('pages/Control1Page'))

export const routes:routeEl[] =[
    {
        path: PATH_DASHBOARD,
        element: <DashboardPage/>
    },
    {
        path: PATH_CONTROL1,
        element: <Control1Page/>
    }
]