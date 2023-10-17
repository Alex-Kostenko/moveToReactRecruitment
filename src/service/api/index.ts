import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

import { employeeControllers } from '@/service/api/controller';
import { authControllers } from '@/service/api/controller/auth';

import { Endpoints } from './types';

export type CustomHeaders = { [key: string]: string };
export type APIVariables = {
  token?: string | null;
  baseURL?: string;
  customHeaders?: CustomHeaders;
  method: string;
};

export type FetchInstance = <T>(
  endpoint: Endpoints | string,
  options?: Omit<RequestInit, 'headers'>
) => Promise<T>;

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://api.recruitment-dev.cleantime-co.com';
export const DEFAULT_COOKIE_KEY = 'true';

export const setDefaultAuthCookieKey = (value?: string) => {
  Cookies.set('auth', value ?? DEFAULT_COOKIE_KEY);
};

export const createAPI = ({ baseURL = API_URL, method }: APIVariables) => {
  const api: FetchInstance = async <T>(
    endpoint: Endpoints | string,
    options?: any
  ): Promise<T> => {
    const response = await axios({
      url: new URL(endpoint, baseURL).toString(),
      method,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      data: JSON.stringify(options?.body),
    });
    return response.data;
  };

  const getRoot = () => api<{ result: string[] }>(Endpoints.ROOT);

  return {
    getRoot,
    ...authControllers(api),
    ...employeeControllers(api),
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      Cookies.remove('auth');
      window.location.href = '/';
    }

    Swal.fire({
      text: 'OOPS something went wrong',
      toast: true,
      position: 'top-end',

      timer: 3000,
      confirmButtonText:
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_548_4907" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#F4F4F5"/></mask><g mask="url(#mask0_548_4907)"><path d="M9.99986 10.7739L6.43894 14.3348C6.32357 14.4502 6.19937 14.5058 6.06636 14.5015C5.93336 14.4972 5.8065 14.4347 5.68578 14.314C5.56504 14.1933 5.50467 14.0643 5.50467 13.927C5.50467 13.7897 5.56504 13.6607 5.68578 13.54L9.22584 9.99991L5.66494 6.43899C5.54955 6.32362 5.494 6.19595 5.49828 6.05599C5.50254 5.91605 5.56504 5.78571 5.68578 5.66499C5.8065 5.54425 5.9355 5.48389 6.07278 5.48389C6.21005 5.48389 6.33905 5.54425 6.45978 5.66499L9.99986 9.22589L13.5608 5.66499C13.6762 5.5496 13.8038 5.49057 13.9438 5.48791C14.0837 5.48523 14.2141 5.54425 14.3348 5.66499C14.4555 5.78571 14.5159 5.91471 14.5159 6.05199C14.5159 6.18927 14.4555 6.31827 14.3348 6.43899L10.7739 9.99991L14.3348 13.5608C14.4502 13.6762 14.5092 13.8004 14.5119 13.9334C14.5145 14.0664 14.4555 14.1933 14.3348 14.314C14.2141 14.4347 14.0851 14.4951 13.9478 14.4951C13.8105 14.4951 13.6815 14.4347 13.5608 14.314L9.99986 10.7739Z" fill="white"/></g></svg>',
      customClass: {
        container: 'custom-swal-container',
      },
    });

    throw error.response;
  }
);
