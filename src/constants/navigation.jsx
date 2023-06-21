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
		key: '2',
		label: 'Battery',
		path: '/',
		icon: <BatteryIcon/>
	},
	{
		key: '1',
		label: 'Voltage Drop',
		path: '/voltagedrop',
		icon: <DCVoltageIcon/>
	},

	{
		key: '3',
		label: 'Wire Size',
		path: '/wire',
		icon: <WiresIcon />
	},
	{
		key: '4',
		label: 'Schedules - In progress!',
		path: '/acschedules',
		icon: <WiresIcon />
	},

]

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
// 	{
// 		key: 'settings',
// 		label: 'Settings',
// 		path: '/settings',
// 		icon: <HiOutlineCog />
// 	},
// 	{
// 		key: 'support',
// 		label: 'Help & Support',
// 		path: '/support',
// 		icon: <HiOutlineQuestionMarkCircle />
// 	}
// ]