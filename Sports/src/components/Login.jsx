// // Login.jsx

// import React, { useState } from 'react';
// import '../index.css'; // Import CSS file for styling

// const LoginPage = () => {
//   const [usernameOrEmail, setUsernameOrEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add code to handle login submission
//     console.log('Username or Email:', usernameOrEmail);
//     console.log('Password:', password);
//     // Example: sending data to a server for authentication
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="usernameOrEmail">Username or Email:</label>
//           <input
//             type="text"
//             id="usernameOrEmail"
//             value={usernameOrEmail}
//             onChange={(e) => setUsernameOrEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// Login.jsx

import React, { useState } from 'react';
import '../index.css'; // Import CSS file for styling
import App from '../App';
import { Link } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle login submission
    console.log('Username or Email:', usernameOrEmail);
    console.log('Password:', password);
    // Example: sending data to a server for authentication
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img src="https://i.pinimg.com/736x/2a/2e/74/2a2e74e07d3947d09edef73dd827a7e4.jpg" alt="Sportopia" />
        
      </div>
      <div className="right-section">
        <h2>Login</h2>
        <p>Log in to your Sportopia account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail">Email:</label>
            <input
              type="email"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          
          <Link to='/'> <button type="submit" className="login-button">Next</button></Link>
          <Link to="/register" id="divl24">
          <p>No Account? Create one!</p>
            </Link>
         
        </form>
      </div>
    </div>
  );
};

export default Login;

