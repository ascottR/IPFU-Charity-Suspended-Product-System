import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
    HiOutlineUser
} from 'react-icons/hi'
import { BiDonateHeart } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdInventory } from "react-icons/md";
import { MdClass } from "react-icons/md";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
    {
		key: 'user',
		label: 'User',
		path: '/user',
		icon: <HiOutlineUser />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'donor',
		label: 'Donor',
		path: '/dornor',
		icon: <BiDonateHeart />
	},
	{
		key: 'receiver',
		label: 'Receiver',
		path: '/receiver',
		icon: <GiReceiveMoney />
	},
	{
		key: 'inventory',
		label: 'Inventory',
		path: '/inventory',
		icon: <MdInventory />
	},
    {
		key: 'programmes',
		label: 'Programmes',
		path: '/programmes',
		icon: <MdClass />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]