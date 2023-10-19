import React from 'react';

import { Tabs, Tab } from '@mui/material';

import { ThemedContainer } from '@/providers';

import { TabComponent } from './styles';

interface TabsComponentProps {
  labels: string[];
  selectedTab: number;
  handleChangeTab: (newValue: number) => void;
}

function TabsComponent({
  handleChangeTab,
  labels,
  selectedTab,
}: TabsComponentProps) {
  return (
    <ThemedContainer theme='tabs'>
      <TabComponent>
        <Tabs
          aria-label='Search Tabs'
          centered
          onChange={(_, newValue) => handleChangeTab(newValue)}
          value={selectedTab}
        >
          {labels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </TabComponent>
    </ThemedContainer>
  );
}

export default TabsComponent;
