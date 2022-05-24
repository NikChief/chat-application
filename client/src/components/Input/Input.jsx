import React from 'react';
import './Input.css';
import send from '../../icons/send.png';

function Input({ message, setMessage, sendMessage}) {
  return (
    <form className="form">
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className='sendButton' onClick={(event)=>sendMessage(event)}> <img src={send} alt="9"/> </button>
    </form>
  );
}

export default Input;
