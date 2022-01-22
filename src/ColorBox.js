import React from 'react';

export const ColorBox = ({ color, setColor}) => {
    return(
        <div className="colorbox" style={{ 'backgroundColor': color }} />
    );
};
