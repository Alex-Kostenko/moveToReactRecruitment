import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface TFormData {
  email: string;
  firstName: string;
  password: string;
}

interface EFormData {
  firstName: string;
  lastName: string;
  price: string;
  priceWithMarkup: string;
  employeeStatusId: number;
  seniorityId: number;
  seniorityName: string;
  about: string;
  imageUrl: string;
  employeeStatus: {
    id: number;
    name: string;
  };
  seniority: {
    id: number;
    name: string;
  };
  employeeSkills: {
    id: number;
    name: string;
  }[];
  employeeSpecializations: {
    id: number;
    name: string;
  }[];

  employeeCountries: {
    id: number;
    name: string;
  }[];
  employeeLanguageLevels: {
    name: string;
    language: {
      id: number;
      name: string;
    };
    languageLevel: {
      id: number;
      name: string;
    };
  }[];
}

interface IFormContext {
  step: number;
  onHandleNext: () => void;
  onHandleBack: () => void;
  formData: TFormData;
  employeeData: EFormData;
  setFormData: Dispatch<SetStateAction<TFormData>>;
  setEmployeeData: Dispatch<SetStateAction<EFormData>>;
}

interface IProps {
  children: ReactNode;
}

export enum StepsSignUp {
  EMAIL = 1,
  NAME,
  PASSWORD,
  RESEND_EMAIL,
}

export enum StepsEmployee {
  BASEINFO = 1,
  SPECIALIZATION,
  STATUS,
  SKILLS,
}

export const SignUpFormContext = createContext<IFormContext>({
  step: StepsSignUp.EMAIL,
  onHandleNext: () => {},
  onHandleBack: () => {},
  formData: {
    email: '',
    firstName: '',
    password: '',
  },
  employeeData: {
    firstName: '',
    lastName: '',
    price: '',
    priceWithMarkup: '',
    employeeStatusId: 0,
    seniorityId: 0,
    seniorityName: '',
    about: '',
    imageUrl: '',
    employeeStatus: {
      id: 0,
      name: '',
    },
    seniority: {
      id: 0,
      name: '',
    },
    employeeSkills: [],
    employeeSpecializations: [],
    employeeCountries: [],
    employeeLanguageLevels: [],
  },
  setFormData: () => {},
  setEmployeeData: () => {},
});

export const EmployeeFormContext = createContext<IFormContext>({
  step: StepsEmployee.BASEINFO,
  onHandleNext: () => {},
  onHandleBack: () => {},
  formData: {
    email: '',
    firstName: '',
    password: '',
  },
  employeeData: {
    firstName: '',
    lastName: '',
    price: '',
    priceWithMarkup: '',
    employeeStatusId: 0,
    seniorityId: 0,
    seniorityName: '',
    about: '',
    imageUrl: '',
    employeeStatus: {
      id: 0,
      name: '',
    },
    seniority: {
      id: 0,
      name: '',
    },
    employeeSkills: [],
    employeeSpecializations: [],
    employeeCountries: [],
    employeeLanguageLevels: [],
  },
  setFormData: () => {},
  setEmployeeData: () => {},
});

export function SignUpFormProvider({ children }: IProps) {
  const [step, setStep] = useState<StepsSignUp>(StepsSignUp.EMAIL);
  const [formData, setFormData] = useState<TFormData>({
    email: '',
    firstName: '',
    password: '',
  });

  function onHandleNext() {
    setStep((prevValue) => prevValue + 1);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue - 1);
  }

  return (
    <SignUpFormContext.Provider
      value={{
        step,
        onHandleNext,
        onHandleBack,
        formData,
        setFormData,
        employeeData: {
          firstName: '',
          lastName: '',
          price: '',
          priceWithMarkup: '',
          employeeStatusId: 0,
          seniorityId: 0,
          seniorityName: '',
          about: '',
          imageUrl: '',
          employeeStatus: {
            id: 0,
            name: '',
          },
          seniority: {
            id: 0,
            name: '',
          },
          employeeSkills: [],
          employeeSpecializations: [],
          employeeCountries: [],
          employeeLanguageLevels: [],
        },
        setEmployeeData: () => {},
      }}
    >
      {children}
    </SignUpFormContext.Provider>
  );
}

export const EmployeeFormProvider = ({ children }: IProps) => {
  const [step, setStep] = useState<StepsEmployee>(StepsEmployee.BASEINFO);
  const [employeeData, setEmployeeData] = useState<EFormData>({
    firstName: '',
    lastName: '',
    price: '',
    priceWithMarkup: '',
    employeeStatusId: 0,
    seniorityId: 0,
    seniorityName: '',
    about: '',
    imageUrl: '',
    employeeStatus: {
      id: 0,
      name: '',
    },
    seniority: {
      id: 0,
      name: '',
    },
    employeeSkills: [],
    employeeSpecializations: [],
    employeeCountries: [],
    employeeLanguageLevels: [],
  });

  function onHandleNext() {
    setStep((prevValue) => prevValue + 1);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue - 1);
  }

  return (
    <EmployeeFormContext.Provider
      value={{
        step,
        onHandleNext,
        onHandleBack,
        formData: {
          email: '',
          firstName: '',
          password: '',
        },
        setFormData: () => {},
        employeeData,
        setEmployeeData,
      }}
    >
      {children}
    </EmployeeFormContext.Provider>
  );
};

export const useSignUpFormState = () => useContext(SignUpFormContext);

export const useEmployeeFormState = () => useContext(EmployeeFormContext);
