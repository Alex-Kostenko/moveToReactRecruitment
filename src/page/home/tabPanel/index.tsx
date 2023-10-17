import React from 'react';

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

function TabPanel({ value, index, children }: TabPanelProps) {
  return (
    <div
      aria-labelledby={`tab-${index}`}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      role='tabpanel'
    >
      {value === index && children}
    </div>
  );
}

export default TabPanel;
