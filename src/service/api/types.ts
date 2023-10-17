export enum Endpoints {
  ROOT = '/',
  SIGNIN = '/Auth/SignIn',
  SIGNUP = '/Auth/SignUp',
  SIGNINGOOGLE = '/Auth/GoogleSignIn',
  SIGNUPGOOGLE = '/Auth/GoogleSignUp',
  RESETPASSWORDGET = '/Auth/ResetPassword',
  IS_EMAIL_ALREADY_REGISTERED = '/Auth/IsEmailAlreadyRegistered',
  LOGOUT = '/Auth/LogOut',
  // eslint-disable-next-line
  RESETPASSWORDPOST = '/Auth/ResetPassword',
  EMPLOYEES = '/Employee/GetList',
  GETEMPLOYEE = '/Employee/Get',
  CREATEEMPLOYEE = '/Employee/Create',
  EMPLOYEEUPDATE = '/Employee/Update',
  DICTIONARY = '/Dictionary/Get',
  PERFECT_MATCH = '/Employee/PerfectMatchSearch',
  MATCH = '/Employee/Search',
  TYPES = '/Dictionary/GetTypes',
  SETTINGS_BY_KEY = '/Settings/GetSettingsByKey',
  CREATE_INTERVIEW_REQUEST = '/Interview/CreateRequest',
}

export interface MatchBody extends ReadableStream<any> {
  pageIndex: number;
  pageSize: number;
  specializations?: number[];
  skillsAndTechnologies?: number[];
  countries?: number[];
  seniority?: number[];
  employeeStatus?: number;
  languageLevels?: LanguageLevels[];
}

export interface LanguageLevels {
  language: number;
  level: number;
}
