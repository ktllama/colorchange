import React from 'react';

export const ColorBox = ({ color, setColor, isDarkText }) => {
    return(
        <div className="colorbox" style={{ 'backgroundColor': color, color: isDarkText ? '#000' : '#fff' }}>
        <p>{color ? color : "Empty Value"}</p>
        </div>
    );
};
