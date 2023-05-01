import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { ReactComponent as BatteryIcon } from '../assets/icon-battery.svg'
import { ReactComponent as DCVoltageIcon } from '../assets/icon-voltage.svg'
import { ReactComponent as WiresIcon } from '../assets/icon-wires.svg'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: '1',
		label: 'Voltage Drop',
		path: '/',
		icon: <DCVoltageIcon/>
	},
	{
		key: '2',
		label: 'Battery Autonomy',
		path: '/battery',
		icon: <BatteryIcon/>
	},
	{
		key: '3',
		label: 'Wire Size',
		path: '/wire',
		icon: <WiresIcon />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
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