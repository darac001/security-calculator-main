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
import { ReactComponent as TableIcon } from '../assets/icon-table.svg'

export const DASHBOARD_SIDEBAR_LINKS = [
		{
		key: '1',
		label: 'ACS Schedules - In progress!',
		path: '/acschedules',
		icon: <TableIcon />
	},
	{
		key: '2',
		label: 'Battery',
		path: '/',
		icon: <BatteryIcon/>
	},
	{
		key: '3',
		label: 'Voltage Drop',
		path: '/voltagedrop',
		icon: <DCVoltageIcon/>
	},

	{
		key: '4',
		label: 'Wire Size',
		path: '/wire',
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