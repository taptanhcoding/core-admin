import { menuBar } from "interfaces/menu";
import { PATH_CONTROL1, PATH_DASHBOARD } from "routes/path";


export const menuData: menuBar[] = [

    {
        text: "Dashboard",
        link: PATH_DASHBOARD,
        key: PATH_DASHBOARD,
        icon: "windows"
    },

    {
        text: "Control1",
        link: PATH_CONTROL1,
        key: PATH_CONTROL1,
        icon: 'setting'
    }
]