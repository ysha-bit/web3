import React from "react";

import NavMenu from "./NavMenu";
import TopHeader from "./TopHeader";

const Number = () => {
  return(
    <div className='container'>
        <div>
        <TopHeader/>
            <nav className="main-nav">
                
            </nav>
        </div>    
            <div className="dashboard">
                <NavMenu></NavMenu>

            <div className="container">
                <h1 id="number">Please enter Licence Plate Number </h1>
                <form>
                    <div class="form-group">
                        <input  type="int" id="registrationNumber" name="registrationNumber" required></input>
                    </div>
                </form>  
                <div className="mb-6">
            <button
              type="submit"
              className=" bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit

            </button>
            
          </div>  
            </div>
               
            </div>
        </div>
    

  );
}

export default Number;