import React from 'react'
import { IoBagHandle, IoPeople, IoCart } from 'react-icons/io5'

export default function StatsGrid() {
	return (
		<div className="flex gap-4 w-full">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Doners</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">250</strong>
						<span className="text-sm text-green-500 pl-2">+12</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Receivers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">216</strong>
						<span className="text-sm text-green-500 pl-2">+24</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-500">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Available Products</span>
					<div className="flex items-center">
						<strong className="text-xl text-green-500 font-semibold">16</strong>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-fuchsia-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Discount Given</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">LKR.2435</strong>
						<span className="text-sm text-red-500 pl-2">10% per product</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}