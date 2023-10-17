import { useEffect, useState } from 'react';

import { createAPI } from '@/service/api';

type DictionaryItem = {
  name: string;
  id: number;
};

type DictionaryData = {
  [key: string]: DictionaryItem[];
};

type DictionaryGroups = string[];

type DictionaryResult = {
  dictionaries: DictionaryData;
  groups: DictionaryGroups;
};

function useDictionary(): DictionaryResult {
  const [dictionaryData, setDictionaryData] = useState<DictionaryResult>({
    dictionaries: {
      Countries: [],
      Specializations: [],
      SkillsAndTechnologies: [],
      Seniority: [],
      EmployeeStatus: [],
      Languages: [],
      LanguageLevels: [],
    },
    groups: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = createAPI({
          method: 'GET',
        });
        const dictionaryTypes = [1, 2, 3, 4, 5, 6, 7];
        const dictionary = await api.dictionary({
          dictionaryType: dictionaryTypes.join('&dictionaryType='),
        });

        if (Array.isArray(dictionary) && dictionary.length > 0) {
          const dictionaries: DictionaryData = {};
          const groups: DictionaryGroups = [];
          dictionary.forEach((item: any) => {
            const dictionaryName = item.name;
            const dictionaryItems = item.items || [];
            const mappedItems = dictionaryItems.map((item: any) => ({
              name: item.name,
              id: item.id,
            }));
            dictionaries[dictionaryName] = mappedItems;
            groups.push(dictionaryName);
          });
          setDictionaryData({
            dictionaries,
            groups,
          });
        }
      } catch (error) {
        console.error('Error with useDictionary:', error);
      }
    };
    fetchData();
  }, []);

  return dictionaryData;
}

export default useDictionary;
