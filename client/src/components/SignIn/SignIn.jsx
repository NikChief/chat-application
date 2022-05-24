import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <div className="signOuterContainer">
      <div className="signInnerContainer">
        <h1 className="heading">Join</h1>
        <div> <input className="signInput" type="text" placeholder="Name" onChange={(event)=> setName(event.target.value)} /></div>
        <div> <input className="signInput mt-20" type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)} /></div>
        <Link onClick = {event => (!name || !room ) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
          <button type="submit" className='button mt-20'>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
