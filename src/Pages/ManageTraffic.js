import React, { useEffect, useState } from 'react';
import NavMenu from "./NavMenu";
import TopHeader from './TopHeader';
import { deleteTraffic, traffficList } from '../Services/TrafficServic';
import { useNavigate } from 'react-router-dom';

const ManageTraffic = () => {
    const navigate = useNavigate();
    const [traffics, setTraffics] = useState([]);

    useEffect(() => {
        fetchAllTraffic();
    }, []); // Add dependency array to avoid infinite loop

    const fetchAllTraffic = () => {
        traffficList().then((response) => {
            setTraffics(response.data);   
        }).catch(error => {
            console.error(error);
        });
    };

    const handleEdit = (id) => {
        navigate(`/editProfile/${id}`);
    };

    const handleDelete = (id) => {
        deleteTraffic(id).then(() => {
            fetchAllTraffic();
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div className='container'>
            <TopHeader />
            <div>
                <nav className="main-nav"></nav>
            </div>
            <div className="dashboard">
                <NavMenu />
                <div>
                    <table className="w-full border-separate" style={{ borderSpacing: "0 15px" }}>
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-6 py-4">S/N</th>
                                <th className="px-6 py-4">Gender</th>
                                <th className="px-6 py-4">Phone Number</th>
                                <th className="px-6 py-4">Location</th>

                            </tr>
                        </thead>
                        <tbody>
                            {traffics.map((traffic, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{traffic.gender}</td>
                                    <td>{traffic.phoneNumber}</td>
                                    <td>{traffic.locationOfWork}</td>
                                    <td>
                                        <button onClick={() => handleEdit(traffic.id)} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                                        <button onClick={() => handleDelete(traffic.id)} className="px-4 py-2 bg-red-500 text-white rounded ml-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTraffic;
