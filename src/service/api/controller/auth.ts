import { FetchInstance } from '@/service/api';
import { Endpoints } from '@/service/api/types';

interface SignUp {
  userId: number;
  id: number;
  title: string;
  email: string;
  name: string;
  password: string;
  completed: boolean;
}

interface IsEmailAlreadyRegisteredResponse {
  isEmailAlreadyRegistered: boolean;
}

export const authControllers = (api: FetchInstance) => ({
  signIn: (body: any) => api<Response>(Endpoints.SIGNIN, { body }),
  signUp: (body: any) => api<SignUp[]>(Endpoints.SIGNUP, { body }),
  signInGoogle: (body: any) => api<any>(Endpoints.SIGNINGOOGLE, { body }),
  signUpGoogle: (body: any) => api<any>(Endpoints.SIGNUPGOOGLE, { body }),
  resetPasswordGet: (email: string) =>
    api<any>(`${Endpoints.RESETPASSWORDGET}?email=${email}`),
  resetPasswordPost: (body: any) =>
    api<any>(Endpoints.RESETPASSWORDPOST, { body }),
  isEmailAlreadyRegistered: (email: string) =>
    api<IsEmailAlreadyRegisteredResponse>(
      `${Endpoints.IS_EMAIL_ALREADY_REGISTERED}?email=${email}`
    ),
  logOut: (body: any) => api<any>(Endpoints.LOGOUT, { body }),
});
