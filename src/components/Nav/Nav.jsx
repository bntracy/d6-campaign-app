import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (<>
      <div  className="nav">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/character-selection">
              Character Selection
            </Link>
            <Link className="navLink" to="/roll-history">
              Roll History
            </Link>
            <p className="navText">{user.username}</p>
            <LogOutButton className="navLink" />
          </>
        )}
      </div></>
  );
}

export default Nav;
