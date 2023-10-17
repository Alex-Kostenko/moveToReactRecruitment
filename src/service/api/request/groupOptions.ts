import { useState, useEffect } from 'react';

import useDictionary from './dictionary';

interface DictionaryItem {
  name: string;
  id: number;
}

interface DictionaryGroup {
  [group: string]: DictionaryItem[];
}

interface DictionaryData {
  groups: string[];
  dictionaries: DictionaryGroup;
}

export interface GroupedOption {
  label: string;
  options: { label: string; value: number; group: string }[];
}

function useGroupedOptions(): GroupedOption[] {
  const dictionaryData: DictionaryData = useDictionary();
  const [groupedOptions, setGroupedOptions] = useState<GroupedOption[]>([]);

  useEffect(() => {
    const options = dictionaryData.groups.map((group: string) => {
      const groupOptions = dictionaryData.dictionaries[group] || [];
      const formattedGroupOptions = groupOptions.map(
        (item: DictionaryItem) => ({
          group,
          label: item.name,
          value: item.id,
        })
      );
      return {
        label: group,
        options: formattedGroupOptions,
      };
    });
    setGroupedOptions(options);
  }, [dictionaryData]);

  return groupedOptions;
}

export default useGroupedOptions;
