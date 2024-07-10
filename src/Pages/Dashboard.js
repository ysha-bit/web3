import React, { useEffect, useState } from "react";

import NavMenu from "./NavMenu";
import TopHeader from "./TopHeader";
import { traffficList } from "../Services/TrafficServic";


const 
Dashboard = () => {

    const [traffics , setTraffics ] = useState([]);

    useEffect(() => {
        fecthAllTraffic();
    })

    const fecthAllTraffic = () =>{
        traffficList().then((response) => {
            setTraffics(response.data);   
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div id="container" className="flex flex-col min-h-screen">
            <TopHeader />
            <div>
                <nav className="main-nav">
                    {/* Add your navigation content here */}
                </nav>
            </div>
            <div className="dashboard flex flex-grow">
                <NavMenu />
                <div className="flex-grow flex flex-col justify-start items-center bg-gray-100 p-4">
                    <h1 className="text-3xl font-bold mt-6">Welcome to the Dashboard</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


//     return (
//       <div id="container">
//           <TopHeader />
//           <div>
//               <nav className="main-nav ">
//                   {/* Add your navigation content here */}
//               </nav>
//           </div>  
          
//           <div className="dashboard">
             
//                  <NavMenu></NavMenu>
//                  <div className="w-3/4 bg-gray-100 p-4">
//           <h1 className="text-xl font-bold mb-4">WELCOME</h1>
//         </div> 

              
//           </div>
//       </div>
//     );
//   }
  
//   export default Dashboard;