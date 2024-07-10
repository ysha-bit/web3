import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import TopHeader from './TopHeader';
import{deleteLicence, licenceList} from '../Services/LicenceServices';

const  ManageLicence= () => {
 
   const [licences , setLicence ] = useState([]);

     useEffect(() => {
         fecthAllLicence();
     })

    const fecthAllLicence = () =>{
         licenceList().then((response) => {
             setLicence(response.data);   
         }).catch(error => {
              console.error(error);
          })
    }

    const handleEdit=(id)=>{
      console.log("editing");
   }
   const handleDelete=(id)=>{
      deleteLicence(id).then(() => {
        fecthAllLicence();
      })
   }

   return (
    <div className='container'>
        <TopHeader />
        <div>
            <nav className="main-nav">
                {/* Add your navigation content here */}
            </nav>
        </div>
        <div className="dashboard">
            <NavMenu />
            <table className="w-full border-separate" style={{ borderSpacing: "0 2px" }}>
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-6">S/N</th>
                        <th className="px-6">NationalId</th>
                        <th className="px-6">NameOfOwner</th>
                        <th className="px-6">VehicleIdentityNumber</th>
                        <th className="px-6">RoadLicence</th>
                        <th className="px-6">Actions</th> {/* Added Actions column */}
                    </tr>
                </thead>
                <tbody>
                    {licences.map((licence, index) => (
                        <tr key={index} className="bg-white">
                            <td className="px-6 py-2">{index + 1}</td>
                            <td className="px-6 py-2">{licence.nationalId}</td>
                            <td className="px-6 py-2">{licence.nameOfOwner}</td>
                            <td className="px-6 py-2">{licence.vehicleIdentityNumber}</td>
                            <td className="px-6 py-2">{licence.roadLicence}</td>
                            <td className="px-6 py-2">
                                <button onClick={() => handleEdit(licence.id)} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                                <button onClick={() => handleDelete(licence.id)} className="px-4 py-2 bg-red-500 text-white rounded ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
}

export default ManageLicence;

//     return( 
//          <div className='container'>
//             <TopHeader/>
//         <div>
//             <nav className="main-nav"> </nav>
                
//         </div>    
//             <div className="dashboard"> 
//                 <NavMenu></NavMenu>
//                 <table className="w-full border-separate" style={{ borderSpacing: "0 5px" }}>

//                 <thead>
//         <tr className="bg-gray-200">
//           <th className="px-6 ">S/N</th>
//           <th className="px-6 ">NationalId</th>
//           <th className="px-6 ">NameOfOwner</th>
//           <th className="px-6 ">VehicleIdentityNumber</th>
//           <th className="px-6 ">RoadLicence</th>
//         </tr>
//       </thead>   <tbody>
//                                 {  licences.map((licence, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{licence.nationalId}</td>
//                                         <td>{licence.nameOfOwner}</td>
//                                         <td>{licence.vehicleIdentityNumber}</td>
//                                         <td>{licence.roadLicence}</td>
//                                         <td>
//                                           <button onClick={() => handleEdit(licence.id)} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
//                                           <button onClick={() => handleDelete(licence.id)} className="px-4 py-2 bg-red-500 text-white rounded ml-2">Delete</button>
//                                         </td>
//                                     </tr>
//                                 )) }
                                
//                             </tbody>
//                         </table>
//                         </div>
//                         </div>
     
// )
//  }   
// export default ManageLicence;