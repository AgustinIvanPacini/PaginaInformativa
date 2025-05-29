import React from 'react';

const HexagonPattern = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <path d="M15 2 L45 2 L55 22 L45 42 L15 42 L5 22 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
    </div>
  );
};

export default HexagonPattern;
