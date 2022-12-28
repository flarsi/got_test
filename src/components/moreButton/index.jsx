import React from 'react';
import './index.css';

function MoreButton({ onClick, disabled }) {
  return (
    <div className='button-wrapper'>
      <button disabled={disabled} onClick={onClick}>
        More
      </button>
    </div>
  );
}

export default MoreButton;
