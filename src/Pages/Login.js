import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { userLogin } from '../Services/LoginServices';


export default function Login () {

  const navigator = useNavigate();

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const [errors, setErrors] = useState({
      email: '',
      password: '',
  })

  const formValidation = () =>{
    let valid = true;

      const errorrsCopy = {...errors}


      if (!email.trim()) {
          errorrsCopy.email = 'Email is required. '
          valid = false;
      }

      if (!password.trim()) {
          errorrsCopy.password = 'Password is required. '
          valid = false;
      } 

      setErrors(errorrsCopy);
      return  valid;
  }

  const loginFormHandler = (e)=>{
    e.preventDefault();
    if (formValidation()) {

      const user = {email, password};
      
      userLogin(user).then((response) =>{
        // console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data.email));
        localStorage.setItem('role', JSON.stringify(response.data.password));

        if (response.data) {
          navigator('/dashbroad');
        }

      //   switch (response.data.role) {
      //     case 'ADMIN':
      //         navigator('/Home');
      //         break;
      //     case 'TRAFFIC':
      //         navigator('/Home');
      //         break;
      //     default:
      //         console.log('Unknown user');
      //         // console.log(response.data.message);
      // }
           
    }).catch(error => console.error(error));
      // console.log(user);
    }
    console.log("form is clicked here ");
  }




    return (
      //   <div className="flex justify-center items-center h-screen bg-gray-100">
      //     <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      //       <h2 className="text-2xl font-bold mb-6">Login</h2>
      //       <form onSubmit={loginFormHandler}>
      //         <div className="mb-4">
      //           <label htmlFor="email" className="block font-medium mb-2">
      //             Email
    
      //           </label>
      //           <input
      //             type="text"
      //             id="email"
      //             name="email"
      //             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      //             placeholder="Enter your email"
      //             value={email}
      //             onChange={(e) =>  (e.target.value)}
      //             required
      //           />
      //         </div>
      //         <div className="mb-6">
      //           <label htmlFor="password" className="block font-medium mb-2">
      //             Password
      //           </label>
      //           <input
      //             type="password"
      //             id="password"
      //             name="password"
      //             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      //             placeholder="Enter your password"
      //             value={password}
      //             onChange={(e) => setPassword(e.target.value)}
      //             required
      //           />
      //         </div>
      //         <div className="mb-6">
      //           <button
      //             type="submit"
      //             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      //           >
      //             Login
      //           </button>
      //         </div>
      //         <div className="flex justify-between items-center mb-4">
      //           <Link to='/' className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      //             Forgot Password?
      //           </Link>
      //           <Link to='/dashboard' className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      //             Go to dashboard
      //           </Link>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // );
  
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
         <div>
                     <button type="submit"  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={loginFormHandler}
    >
                    Login
                  </button>
                        </div>
          <div className="flex justify-between items-center mb-4">
            <Link to='/'  className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"> Forgot Password?</Link>

            <Link to='dashbroad' className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Go to dashbroad</Link>
          </div>
        </form>
      </div>
      </div>
    );
}

