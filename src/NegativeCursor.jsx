import React, { useState, useEffect, useRef } from 'react';

const NegativeCursor = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          mixBlendMode: 'difference',
          position: 'fixed'
        }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default NegativeCursor;