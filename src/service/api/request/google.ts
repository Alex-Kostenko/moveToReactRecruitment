import { CredentialResponse } from '@react-oauth/google';

import { createAPI } from '@/service/api';

const useGoogleSignUp = () => {
  const googleSignUp = async ({ credential }: CredentialResponse) => {
    if (credential) {
      const api = createAPI({
        method: 'POST',
      });
      const dataSignUp = await api.signUpGoogle({
        idToken: credential,
      });

      return dataSignUp;
    }
  };
  return { googleSignUp };
};

export default useGoogleSignUp;
