import React from 'react'
import img2 from './../../images/ivana-square.jpg'
import { Line } from "react-chartjs-2";
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,

} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,



)


export default function ElectionProgress() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Almost Voted Days",
        data: [15, 25, 50, 70, 80, 85, 90, 95, 100, 100],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };
  const candidates = [
    {
      id: 1,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2020,
      graduationYear: 2024,
      department: 'Computer Science',
      status: 'Pending',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    },
    {
      id: 3,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
,
    {
      id:4,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 5,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 6,
      fullName: 'Natnael Getachew',
      firstName:'ggg',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 7,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 8,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: 'https://via.placeholder.com/150',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    
    
  ];
  return (
    <div>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="py-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Election Progress</h2>
    </div>
  <div className='grid grid-cols-3 gap-4 p-5'>
  {candidates.map((candidate ) => (
    <div key={candidate.id} className="flex flex-wrap justify-center">
      {/* Candidate Cards */}
      <div className="w-full sm:w-1/2 lg:w-1/3   p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-between">
          <img className="w-40 h-40 object-cover object-center"   src={candidate.photoUrl}
                   alt={candidate.firstName}/>
          {/* <div className="p-4">
            <h3 className="text-gray-900 font-bold mb-2">{candidate.firstName}</h3>
            <p className="text-gray-700 text-base mb-2">{candidate.department}</p>
          </div> */}
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-[0.3rem] font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                Candidate Voted Number
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-600">
                Progress
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-gray-50">
            <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
            <div style={{ width: '30%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
            <span className='text-[0.5rem] bg-white ml-1'>70%</span>
          </div>
          <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-gray-200">
            <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
            <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
            <span className='text-[0.5rem] bg-white ml-1'>60%</span>
          </div>
          <div className="container mx-auto py-1">
      <div className="bg-emerald-50 rounded-lg shadow-md p-2 mb-1">
        <h2 className="text-sm font-bold mb-1 text-gray-800">
          Almost Voted Days Report
        </h2>
        <div className="bg-emerald-50 rounded-lg  p-1">
   
          <Line type='bar' data={data} />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
                         ))}

    </div>
    
  
  
  </div>
</div>
      
    </div>
  )
}
