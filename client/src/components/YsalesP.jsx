import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'



export default function YsalesP() {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Available Products</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
				<iframe
      title="MongoDB Charts"
      style={{
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
      }}
      width="640"
      height="480"
      src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=6638e92f-acb5-4cc0-847b-b9936741d5b2&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}