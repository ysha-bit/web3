import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-3/2 bg-blue-700 text-black p-4">
          <ul>
            <li className="mb-2"><Link to='../dashbroad' className="hover:text-gray-300">Dashbroad</Link></li>
            <li className="mb-2"><Link  to='../ManageTraffic' className="hover:text-gray-300">ManageTraffic</Link></li>
            <li className="mb-2"><Link  to='../ManageLicence' className="hover:text-gray-300">ManageLicence</Link></li>
            <li className="mb-2"><Link  to='../profile' className="hover:text-gray-300">Edit Profile</Link></li>
            <li className="mb-2"><Link  to='../number' className="hover:text-gray-300">Enter Plate Number</Link></li>
            <li className="mb-2"><Link to='../mistakes' className="hover:text-gray-300">Mistakes</Link></li>
            <li className="mb-2"><Link to='../Punishment
            ' className="hover:text-gray-300">Punishment</Link></li>

            <li className="mb-2"><Link  to='../logout' className="hover:text-gray-300">Log Out</Link></li>
          </ul>
        </div>
        {/* Content */}
        {/* <div className="w-3/4 bg-gray-100 p-4"> */}
          {/* <h1 className="text-xl font-bold mb-4">Content Area</h1> */}
          {/* <p>This is the main content area. You can add any content you like here.</p> */}
        {/* </div> */}
      </div>
        //   <div className='contai'>
        
      
        
        // <aside className="sidebar">
            // <ul>
                // {/* <li> */}
                    // <Link to='../dashbroad'>Dashbroad </Link>
                // </li>
                // <li><Link  to='../ManageTraffic '>ManageTraffic </Link></li>

                // <li><Link  to='../profile'>Edit Profile</Link></li>
                // <li><Link  to='../number'>Enter Plate Number</Link></li>
                // {/* <li><a href="#">Enter Plate Number</a></li> */}
                // <li><Link to='../mistakes'>mistakes</Link></li>
                // <li><Link  to='../logout'>Log Out</Link></li>

                // {/* <li><a href="#">Log Out</a></li> */}
            // </ul>

        // </aside> 
        // </div>    

    );
}

export default NavMenu;