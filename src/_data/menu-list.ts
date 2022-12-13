import { faTh, faUsers, faLink, faPieChart, faVolumeUp, faInfo, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
export interface Menu {
    id:number
    icon:IconDefinition,
    title:string,
    path: string
}

export const menuData:Menu[] = [
    {
        id:1,
        icon: faTh,
        title: 'Dashboard',
        path: '/pages/dashboard'
    },
    {
        id:2,
        icon: faUsers,
        title: 'Partners',
        path: '/pages/partners'
    },
    {
        id:3,
        icon: faLink,
        title: 'Links',
        path: '/pages/links'
    },
    {
        id:4,
        icon: faPieChart,
        title: 'Stats',
        path: '/pages/stats'
    },
    {
        id:5,
        icon: faInfo,
        title: 'Information',
        path: '/pages/info'
    },
    {
        id:6,
        icon: faTelegram,
        title: 'Telegram bots',
        path: '/pages/tbots'
    },
    {
        id:7,
        icon: faVolumeUp,
        title: 'Promo',
        path: '/pages/promo'
    }
]