import React from 'react';

import { InputActionMeta } from 'react-select';

import ThemedContainer from '@/component/layout/themeProvider';
import SearchSelect from '@/component/react-select';

interface FiltersType {
  specializations?: number[];
  skillsAndTechnologies?: number[];
  countries?: number[];
  seniority?: number[];
  employeeStatus?: number[];
  languageLevels?: number[];
  languages?: number[];
  [key: string]: number[] | undefined;
}
interface MainSearchProps {
  options: {
    label: string;
    options: { label: string; value: number; group: string }[];
  }[];
  setFilter?: React.Dispatch<React.SetStateAction<FiltersType>>;
  onOptionSelect?: (selectedOptionValue: string) => void;
  selectedValue?: any;
  styles: any;
  value?: any;
}

function MainSearch({
  options,
  setFilter,
  onOptionSelect,
  styles,
  value,
}: MainSearchProps) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleChange = (selectedOptions: any) => {
    setFilter?.(() => {
      const resultObject: any = {};

      selectedOptions.forEach((item: any) => {
        if (resultObject[item.group.toLocaleLowerCase()]) {
          resultObject[item.group.toLocaleLowerCase()].push(item.value);
        } else {
          resultObject[item.group.toLocaleLowerCase()] = [item.value];
        }
      });

      return resultObject;
    });

    if (selectedOptions.length > 0) {
      const selectedValue: any = {
        group: selectedOptions[0].group,
        label: selectedOptions[0].label,
        value: selectedOptions[0].value,
      };
      if (onOptionSelect) {
        onOptionSelect(selectedValue);
      }
    }
  };

  return (
    <ThemedContainer theme='other'>
      <SearchSelect
        menuIsOpen={menuIsOpen}
        onChange={handleChange}
        onInputChange={(input: InputActionMeta) => {
          if (input) {
            setMenuIsOpen(true);
          } else {
            setMenuIsOpen(false);
          }
        }}
        options={options}
        placeholder='Search by title, skill, etc.'
        styles={styles}
        value={value}
      />
    </ThemedContainer>
  );
}

export default MainSearch;
