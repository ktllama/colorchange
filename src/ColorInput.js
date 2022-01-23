import React from 'react';

export const ColorInput = ({ color, setColor, isDarkText, setIsDarkText }) => {

  return(
    <form className="colorinput">
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
