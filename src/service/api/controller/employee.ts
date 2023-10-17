import { FetchInstance } from '@/service/api';
import { Endpoints, MatchBody } from '@/service/api/types';

interface EmployeeUpdate {
  userId: number;
  id: number;
  title: string;
  email: string;
  name: string;
  password: string;
  completed: boolean;
}

export const employeeControllers = (api: FetchInstance) => ({
  employees: (body: any) =>
    api<any>(
      `${Endpoints.EMPLOYEES}?PageIndex=${body.pageIndex}&PageSize=${body.pageSize}`
    ),
  getEmployee: (body: any) => api<any>(`${Endpoints.GETEMPLOYEE}?id=${body}`),
  createEmployee: (body: any) => api<any>(Endpoints.CREATEEMPLOYEE, { body }),
  employeeUpdate: (body: any) =>
    api<EmployeeUpdate[]>(Endpoints.EMPLOYEEUPDATE, { body }),
  dictionary: (body: any) =>
    api<any>(`${Endpoints.DICTIONARY}?dictionaryType=${body.dictionaryType}`),
  perfectMatch: (body: MatchBody) =>
    api<any>(Endpoints.PERFECT_MATCH, { body }),
  match: (body: MatchBody) => api<any>(Endpoints.MATCH, { body }),
  getTypes: () => api<any>(Endpoints.TYPES),
  getTypeItems: () => api<any>(Endpoints.DICTIONARY),
  getSettingsKey: (body: string) =>
    api<any>(`${Endpoints.SETTINGS_BY_KEY}?key=${body}`),
  createInterviewRequest: (body: any) =>
    api<any>(Endpoints.CREATE_INTERVIEW_REQUEST, { body }),
});
