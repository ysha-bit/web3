
import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import TopHeader from './TopHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { getTrafficById, updateTraffic } from '../Services/TrafficServic';

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        nida: '',
        numberOfRegistration: '',
        locationOfWork: '',
        phoneNumber: '',
        gender: ''
    });

    useEffect(() => {
        if (id) {
            fetchProfile(id);
        }
    }, [id]);

    const fetchProfile = (id) => {
        getTrafficById(id).then((response) => {
            setProfile(response.data);
        }).catch(error => {
            console.error(error);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTraffic(id, profile).then(() => {
            navigate('/manageTraffic'); // Navigate back to the manage traffic page
        }).catch(error => {
            console.error(error);
        });
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
                <main className='flex flex-grow justify-center items-center bg-gray-100 p-4'>
                    <div className='w-full max-w-md'>
                        <h2 id='edit' className="text-center text-2xl font-bold mb-4">Edit Profile</h2>
                        <div className='form-group'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group mb-4'>
                                    <label htmlFor="nida" className='block text-sm font-medium mb-2'>NIDA</label>
                                    <input
                                        className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                                        type="text"
                                        id="nida"
                                        name="nida"
                                        value={profile.nida}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="numberOfRegistration" className='block text-sm font-medium mb-2'>Number of Registration</label>
                                    <input
                                        className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                                        type="text"
                                        id="numberOfRegistration"
                                        name="numberOfRegistration"
                                        value={profile.numberOfRegistration}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="locationOfWork" className='block text-sm font-medium mb-2'>Location of Work</label>
                                    <input
                                        className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                                        type="text"
                                        id="locationOfWork"
                                        name="locationOfWork"
                                        value={profile.locationOfWork}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="phoneNumber" className='block text-sm font-medium mb-2'>Phone Number</label>
                                    <input
                                        className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={profile.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="gender" className='block text-sm font-medium mb-2'>Gender</label>
                                    <select
                                        className='block w-full px-3 py-2 border border-gray-300 rounded-md'
                                        id="gender"
                                        name="gender"
                                        value={profile.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Profile;



// import React from 'react';
// import NavMenu from './NavMenu';
// import TopHeader from './TopHeader';

// const Profile = () => {
//     return (
//       <div className='container'>
//       <div>
//       <TopHeader/>
//           <nav className="main-nav">
              
//           </nav>
//       </div>    
//           <div className="dashboard">
//               <NavMenu></NavMenu>
//               <main className='main-content'>
//                 <h2 id='edit'>Edit Profile</h2>

//               <div > <div className='form-Group'>
//       <form>
//         <div className='form-group'>
//           <label htmlFor="registrationNumber">NIDA</label>
//           <input
//             className='label'
//             type="int"
//             id="registrationNumber"
//             name="registrationNumber"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="registrationNumber">Number of Registration</label>
//           <input
//             className='Label'
//             type="text"
//             id="registrationNumber"
//             name="number"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="registrationNumber">Location of work</label>
//           <input
//             className='label'
//             type="text"
//             id="registrationNumber"
//             name="location"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="name">Phone Number</label>
//           <input
//             className='Label'
//             type="int"
//             id="name"
//             name="name"
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor="gender">Gender</label>
//           <select className='label'id="gender" name="gender" required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className='form-group'>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div> </div>
//     </main>
             
//           </div>
//       </div>
//     );

   

// }
// export default Profile;