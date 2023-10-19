import React from 'react';

import ReactSelect, { components } from 'react-select';

import CustomClearIndicator, { CustomSearchIcon } from './styles';

interface SearchSelectProps {
  options: any;
  onChange?: (selectedOptions: any) => void;
  placeholder?: string;
  onInputChange?: any;
  menuIsOpen?: any;
  styles: any;
  value?: any;
}

const GroupHeading = (props: any) => <components.GroupHeading {...props} />;

const Control = ({ children, ...props }: any) => (
  <components.Control {...props}>
    <CustomSearchIcon />
    {children}
  </components.Control>
);

export function SearchSelect({
  options,
  onChange,
  placeholder,
  onInputChange,
  menuIsOpen,
  styles,
  value,
}: SearchSelectProps) {
  const customFilterOption = (option: any, rawInput: any) => {
    return option.label.toLowerCase().includes(rawInput.toLowerCase());
  };
  return (
    <ReactSelect
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Control,
        ClearIndicator: CustomClearIndicator,
        GroupHeading,
      }}
      filterOption={customFilterOption}
      isClearable
      isMulti
      isSearchable
      menuIsOpen={menuIsOpen}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options}
      placeholder={placeholder}
      styles={styles}
      value={value}
    />
  );
}
