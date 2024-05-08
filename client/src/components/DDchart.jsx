import React from 'react'



function DDchart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
    <strong className="text-gray-700 font-medium">Donations & Discounts</strong>
    <div className="mt-3 w-full flex-1 text-xs">
        <div>
			 <iframe
      title="Embedded Chart"
      style={{
        background: '#FFFFFF',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        width: '900px',
        height: '280px'
      }}
      src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=663a6d81-6bc2-4560-87c2-36e57d67f90d&maxDataAge=60&theme=light&autoRefresh=true"
    />
		</div>

    </div>
    </div>
  )
}

export default DDchart