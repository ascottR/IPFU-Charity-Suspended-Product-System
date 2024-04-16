import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
	{
		name: 'Jan',
		Donation: 40000,
		Discount: 4000
	},
	{
		name: 'Feb',
		Donation: 30000,
		Discount: 3000
	},
	{
		name: 'Mar',
		Donation: 20000,
		Discount: 2000
	},
	{
		name: 'Apr',
		Donation: 27800,
		Discount: 2780
	},
	{
		name: 'May',
		Donation: 18900,
		Discount: 1890
	},
	{
		name: 'Jun',
		Donation: 23900,
		Discount: 2390
	},
	{
		name: 'July',
		Donation: 34900,
		Discount: 4300
	},
	{
		name: 'Aug',
		Donation: 20000,
		Discount: 9800
	},
	{
		name: 'Sep',
		Donation: 27800,
		Discount: 3908
	},
	{
		name: 'Oct',
		Donation: 18900,
		Discount: 4800
	},
	{
		name: 'Nov',
		Donation: 23900,
		Discount: 3800
	},
	{
		name: 'Dec',
		Donation: 34900,
		Discount: 4300
	}
]


function DDchart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
    <strong className="text-gray-700 font-medium">Donations & Discounts</strong>
    <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
            >
                <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Discount" fill="#bcf542" />
						<Bar dataKey="Donation" fill="#c42d9a" />

            </BarChart>
        </ResponsiveContainer> 

    </div>
    </div>
  )
}

export default DDchart