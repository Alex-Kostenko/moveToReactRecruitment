import React from 'react';

import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export const CustomSearchIcon = styled(SearchIcon)`
  font-size: 28px;
  color: #333;

  &:hover {
    color: #2146af;
  }
  &:focus {
    color: #2146af;
  }
  &:focus {
    color: #2146af;
  }
`;

export const ClearIndicatorStyles = styled.p`
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #2146af;
  margin-right: 12px;
`;

const CustomClearIndicator = ({ innerProps, selectProps }: any) => {
  return (
    <div {...innerProps} onClick={selectProps.clearValue}>
      <ClearIndicatorStyles>Clear All</ClearIndicatorStyles>
    </div>
  );
};

export default CustomClearIndicator;
