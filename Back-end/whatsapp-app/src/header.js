// // src/components/Header.js
// import React from 'react';
// import './Header.css'; // Create a separate CSS file for header styles

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="top-header">
//         <i className="ri-message-2-fill"></i>
//         <i className="ri-donut-chart-fill"></i>
//         <i className="ri-chat-private-fill"></i>
//         <i className="ri-group-line"></i>
//       </div>
//       <div className="bottom-header">
//         <i className="ri-settings-3-line"></i>
//       </div>
//     </header>
//   );
// };

// export default Header;


// Example of using Links in Header component
// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <Link to="/"><i className="ri-message-2-fill"></i></Link>     {/* Home Link */}
        <Link to="/chat"><i className="ri-chat-private-fill"></i></Link>  {/* Chat Link */}
        <Link to="/profile"><i className="ri-user-line"></i></Link>    {/* Profile Link */}
      </div>
      <div className="bottom-header">
        <i className="ri-settings-3-line"></i>
      </div>
    </header>
  );
};

export default Header;

