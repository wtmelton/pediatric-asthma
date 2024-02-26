// TipContext.js

import React, { createContext, useContext, useState } from 'react';

const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [showTips, setShowTips] = useState(false);

  const toggleTips = () => {
    setShowTips((prevShowTips) => !prevShowTips);
  };

  return (
    <TipContext.Provider value={{ showTips, toggleTips }}>
      {children}
    </TipContext.Provider>
  );
};

export const useTips = () => {
  const context = useContext(TipContext);
  if (!context) {
    throw new Error('useTips must be used within a TipProvider');
  }
  return context;
};
