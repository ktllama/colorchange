import React from 'react';

export const ColorInput = ({ color, setColor, handleSubmit }) => {

  return(
    <form className="colorinput" onSubmit={handleSubmit}>
        <label htmlFor="colorinput" >color input</label>
        <input
            autoFocus
            id="colorinput"
            type="text"
            placeholder='type color here'
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    </form>
  );
};
