import React from 'react'
import StatsGrid from '../components/StatGrid'
import DDchart from '../components/DDchart'
import YsalesP from '../components/YsalesP'
import DecisionForm from '../components/DecisionForm'

function ManagerDashboard() {
  return (
    <div className='flex gap-4 flex-col'>
      <StatsGrid/>
      <div className='flex gap-4 flex-row w-full'>
      <DDchart/>
      <YsalesP/>
      </div>
      <div className='flex gap-4 flex-row w-full'>
        <DecisionForm/>
      </div>
    </div>
  
  )
}

export default ManagerDashboard