import { useEffect, useState } from 'react';

import { createAPI } from '@/service/api';
import { IEmployeeProfile } from '@/type/employeeFields';

function useEmployee(slug: string) {
  const [employeeData, setEmployeeData] = useState<IEmployeeProfile>(
    {} as IEmployeeProfile
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const api = createAPI({
          method: 'GET',
        });
        const dataSignIn = await api.getEmployee(slug);
        if (dataSignIn) {
          setIsLoading(false);
          setEmployeeData(dataSignIn as IEmployeeProfile);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, [slug]);

  return { employeeData, isLoading };
}
export default useEmployee;
