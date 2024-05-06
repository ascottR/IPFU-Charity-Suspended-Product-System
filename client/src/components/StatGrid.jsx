import React from 'react';
import { IoBagHandle, IoPeople, IoCart } from 'react-icons/io5';
import jsPDF from 'jspdf';

export default function StatsGrid() {
  const downloadReport = () => {
    const doc = new jsPDF();
    let y = 10;

    // Add heading
    doc.setFontSize(18);
    doc.text("Statistics Report", 10, y);
    y += 10;

    // Add individual statistics
    const statistics = [

      { icon: <IoCart />, label: "Available Products", value: "16" },
      { icon: <IoBagHandle />, label: "Discount Given", value: "LKR.2435", change: "10% per product" }
    ];

    statistics.forEach(stat => {
      doc.setFontSize(12);
      doc.text(`${stat.label}: ${stat.value}`, 10, y);
      y += 10;
    });

    // Save the PDF
    doc.save("statistics_report.pdf");
  };

  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Doners</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"><div> <iframe
   
   src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=6638ac68-942c-4a81-8675-a4a0261add8f&maxDataAge=60&theme=light&autoRefresh=true"
   title="MongoDB Chart"
    width="100"
    height="100"
    allowFullScreen
  ></iframe></div>
            </strong>
            
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Receivers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold"><div><iframe
      
      src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=6638b2ef-e784-47f1-8258-acbf91782f78&maxDataAge=60&theme=light&autoRefresh=true"
      title="MongoDB Chart"
      width="100"
      height="100"
      allowFullScreen
    ></iframe></div></strong>
            
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-green-500 font-semibold">16</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-400">
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
      <div className="flex items-center">
        <button onClick={downloadReport} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
          Download Report
        </button>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}
