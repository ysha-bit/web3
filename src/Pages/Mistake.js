import React from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';

function Mistake() {
    return (
        <div className='flex flex-col min-h-screen'>
            <TopHeader />
            <div>
                <nav className="main-nav"> </nav>
            </div>
            <div className="dashboard flex flex-grow">
                <NavMenu />
                <div className="flex flex-grow justify-center items-center">
                    <div className="contai w-full max-w-lg">
                        <h1 id='h1' className="text-center mb-6">Common Road Mistakes</h1>
                        <ul className="mistake-list space-y-4">
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Speeding: Exceeding the speed limit</Link>
                                <input type="checkbox" id="speeding" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Seatbelt: Not wearing a seatbelt</Link>
                                <input type="checkbox" id="seatbelt" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Drunk Driving: Driving under the influence of alcohol</Link>
                                <input type="checkbox" id="drunkDriving" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Mobile Use: Using a mobile phone while driving</Link>
                                <input type="checkbox" id="mobileUse" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Traffic Light: Running red lights</Link>
                                <input type="checkbox" id="trafficLight" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Improper Lane Change: Unsafe lane changing without signaling</Link>
                                <input type="checkbox" id="improperLaneChange" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Overloading: Carrying more passengers or cargo than allowed</Link>
                                <input type="checkbox" id="overloading" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Helmet: Not wearing a helmet on a motorcycle</Link>
                                <input type="checkbox" id="helmet" name="mistake" />
                            </li>
                            <li className="flex justify-between items-center">
                                <Link to='../mistakes'>Expired License: Driving with an expired license</Link>
                                <input type="checkbox" id="expiredLicense" name="mistake" />
                            </li>
                        </ul>

                        <div className="mb-6">
                                <button
                                type="submit"
                                className=" bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                                Submit

                                </button>
                                
                            </div> 
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Mistake;








// import React from 'react';
// import NavMenu from './NavMenu';
// import { Link } from 'react-router-dom';
// import TopHeader from './TopHeader';

// function Mistake (){
//     return (
//         <div className='contai'>
//             <TopHeader/>
//         <div>
//             <nav className="main-nav"> </nav>
                
//         </div>    
//             <div className="dashboard"> 
//                 <NavMenu></NavMenu>

                

//                    <div className="contai">
//                         <h1 id='h1'>Common Road Mistakes </h1>
//                         <ul className="mistake-list">
//                             <li>
//                             <li>
//                                  <input type="checkbox" id="speeding" name="mistake" />
        
//                                 <Link to='../mistakes'>Speeding: Exceeding the speed limit</Link></li>
//                             </li>

//                             <li>
//                             <Link to='../mistakes'>Seatbelt: Not wearing a seatbelt</Link>
                              
//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Drunk Driving: Driving under the influence of alcohol</Link>

//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Mobile Use: Using a mobile phone while driving</Link>
                                
//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Traffic Light: Running red lights</Link>
                              
//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Improper Lane Change: Unsafe lane changing without signaling</Link>
                           
//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Overloading: Carrying more passengers or cargo than allowed</Link>
  
//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Helmet: Not wearing a helmet on a motorcycle</Link>

//                             </li>
//                             <li>
//                             <Link to='../mistakes'>Expired License: Driving with an expired license</Link>

//                             </li>
//                         </ul>
//                     </div>
                
                    
               
//             </div> 
//         </div>
        
//     );


// }

// export default Mistake;