import React, { useState } from 'react';
import NavMenu from './NavMenu';
import TopHeader from './TopHeader';
import { Link } from 'react-router-dom';


const Punishment = () => {


    const mistakesList = [
        { id: 1, description: 'Speeding: Exceeding the speed limit', fine: 50 },
        { id: 2, description: 'Seatbelt: Not wearing a seatbelt', fine: 30 },
        { id: 3, description: 'Drunk Driving: Driving under the influence of alcohol', fine: 200 },
        { id: 4, description: 'Mobile Use: Using a mobile phone while driving', fine: 100 },
        { id: 5, description: 'Traffic Light: Running red lights', fine: 150 },
        { id: 6, description: 'Improper Lane Change: Unsafe lane changing without signaling', fine: 75 },
        { id: 7, description: 'Overloading: Carrying more passengers or cargo than allowed', fine: 50 },
        { id: 8, description: 'Helmet: Not wearing a helmet on a motorcycle', fine: 25 },
        { id: 9, description: 'Expired License: Driving with an expired license', fine: 100 }
      ];
      
      const Mistake = () => {
        const [selectedMistakes, setSelectedMistakes] = useState([]);
        const [date, setDate] = useState('');
        const [deadline, setDeadline] = useState('');
      
        const handleCheckboxChange = (id) => {
          setSelectedMistakes((prev) =>
            prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
          );
        };
      
        const calculateTotalFine = () => {
          return selectedMistakes.reduce((total, id) => {
            const mistake = mistakesList.find((m) => m.id === id);
            return total + (mistake ? mistake.fine : 0);
          }, 0);
        };
    return (
        <div className='flex flex-col min-h-screen'>
          <TopHeader />
          <div>
            <nav className="main-nav">
              {/* Add your navigation content here */}
            </nav>
          </div>
          <div className="dashboard flex flex-grow">
            <NavMenu />
            <div className="flex-grow flex flex-col items-center bg-gray-100 p-4">
              <div className='w-full max-w-lg'>
                <h1 id='h1' className="text-center text-2xl font-bold mb-4">Common Road Mistakes</h1>
                <ul className="mistake-list space-y-4">
                  {mistakesList.map((mistake) => (
                    <li key={mistake.id} className="flex justify-between items-center">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          onChange={() => handleCheckboxChange(mistake.id)}
                        />
                        <Link to='../mistakes'>{mistake.description}</Link>
                      </label>
                      <span>${mistake.fine}</span>
                    </li>
                  ))}
                </ul>
                <form className="mt-6">
                  <div className='form-group mb-4'>
                    <label htmlFor="date" className='block text-sm font-medium mb-2'>Date of Mistakes</label>
                    <input
                      type="date"
                      id="date"
                      className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor="deadline" className='block text-sm font-medium mb-2'>Deadline for Fine</label>
                    <input
                      type="date"
                      id="deadline"
                      className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <label className='block text-sm font-medium mb-2'>Total Fine Amount</label>
                    <input
                      type="text"
                      className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                      value={`$${calculateTotalFine()}`}
                      readOnly
                    />
                  </div>
                  <div className='form-group'>
                    <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}



export default Punishment;