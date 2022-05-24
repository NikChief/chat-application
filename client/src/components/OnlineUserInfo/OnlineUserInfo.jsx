import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './OnlineUserInfo.css';

function OnlineUserInfo({ users }) {
  console.log('look',users);
  return (
    <>
      <div class="dropdown">
        <button class="dropbtn">Users Online</button>
        <div class="dropdown-content">
          {users ? users.map(({name} ) => <a key={name}> <img alt="Online Icon" src={onlineIcon} /> {name} </a>) : <span> Room is empty</span>}
        </div>
      </div>
    </>)
}
export default OnlineUserInfo;
