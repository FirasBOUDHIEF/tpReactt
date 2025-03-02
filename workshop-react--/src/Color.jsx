import React, { useState, useCallback, useMemo } from 'react';

const Color = ({ initialColor, colorOptions }) => {
  const [color, setColor] = useState(initialColor);

  const randomColor = useMemo(() => {
    return () => colorOptions[Math.floor(Math.random() * colorOptions.length)];
  }, [colorOptions]);

  const change = useCallback(() => {
    setColor(randomColor());
  }, [randomColor]);

  return (
    <div style={{ background: color, padding: '50px', textAlign: 'center' }}>
      <h2>{color}</h2>
      <button onClick={change}>Changer la couleur</button>
    </div>
  );
};

export default Color;
