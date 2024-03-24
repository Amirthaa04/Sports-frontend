import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="Header">
        <img src="./logo.png" width="90px" height="90px" />
        <input type="text" name="Search" placeholder="Search" />
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signin">Sign-in</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="">Shopping Cart</a>
          </li>
        </ul>
      </div>
      <div className="List">
        <ul>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
          <li>
            <a href="/sport">Sports Equipment</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header

