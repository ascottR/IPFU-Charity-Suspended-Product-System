import React from 'react';
import { IoBagHandle, IoPeople, IoCart } from 'react-icons/io5';

export default function StatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Donors</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              <iframe
                src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=6638ac68-942c-4a81-8675-a4a0261add8f&maxDataAge=60&theme=light&autoRefresh=true"
                title="MongoDB Chart"
                width="100"
                height="100"
                allowFullScreen
              ></iframe>
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
            <strong className="text-xl text-gray-700 font-semibold">
              <iframe
                src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=6638b2ef-e784-47f1-8258-acbf91782f78&maxDataAge=60&theme=light&autoRefresh=true"
                title="MongoDB Chart"
                width="100"
                height="100"
                allowFullScreen
              ></iframe>
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales (LKR.)</span>
          <div className="flex items-center">
            <strong className="text-xl text-green-500 font-semibold">
              <iframe
                src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=663a4aa4-9db5-4682-827c-66dee399ca14&maxDataAge=60&theme=light&autoRefresh=true"
                title="MongoDB Chart"
                width="100"
                height="100"
                allowFullScreen
              ></iframe>
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-400">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Discount Given (LKR.)</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              <iframe
                src="https://charts.mongodb.com/charts-project-0-fxlrgxm/embed/charts?id=663a4cff-5d06-4de1-8d97-35b8a5078134&maxDataAge=60&theme=light&autoRefresh=true"
                title="MongoDB Chart"
                width="100"
                height="100"
                allowFullScreen
              ></iframe>
            </strong>
            <span className="text-sm text-red-500 pl-2">15% per product</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}
