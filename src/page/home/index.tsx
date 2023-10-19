// import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import useGroupedOptions from '@/service/api/request/groupOptions';

import { MainSearchStyles } from '@/components/react-select-styles/styles';

import MainSearch from './mainSearch';
import { Wrapper, Container, Tab, Title } from './styles';
import TabPanel from './tabPanel';
import TabsComponent from './tabsComponent';

const tabLabels: string[] = ['Search for Candidates', 'Search for Contracts'];

function MainPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();
  const groupedOptions = useGroupedOptions();

  const handleChangeTab = (newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleOptionSelect = (selectedValue: any) => {
    navigate(
      `/candidate?${selectedValue.group.toLocaleLowerCase()}=${
        selectedValue.value
      }`
    );
  };

  return (
    <Wrapper>
      <Container>
        <TabsComponent
          handleChangeTab={handleChangeTab}
          labels={tabLabels}
          selectedTab={selectedTab}
        />
        <Link to='/candidate'>CLICk</Link>
        <Tab>
          <TabPanel index={0} value={selectedTab}>
            <Title>Find a specialist for your next project</Title>
            <MainSearch
              onOptionSelect={handleOptionSelect}
              options={groupedOptions}
              styles={MainSearchStyles}
            />
          </TabPanel>
          <TabPanel index={1} value={selectedTab}>
            {/* Content for the second tab */}
          </TabPanel>
        </Tab>
      </Container>
    </Wrapper>
  );
}

export default MainPage;
