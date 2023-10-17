export interface IEmployeeFields {
  firstName: string;
  secondName: string;
  selectLocation: string[];
  selectSpecialization: string[];
  seniority: string;
  price: string;
  isActiveSearch: boolean;
  hasContract: boolean;
  selectSkillsTechs: string[];
  selectLanguage: string;
  selectLevel: string;
  languageLevels: {
    language: string | null;
    level: string | null;
  }[];
  about: string;
}

export interface EFormData {
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

export interface IExtendedEmployeeProfile extends IEmployeeProfile {
  id: string;
}

export interface IEmployeeProfile {
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
  employeeExperiences: [
    {
      id: number;
      employeeId: number;
      companyName: string;
      companyLocationId: number;
      specializationId: number;
      startDate: string;
      endDate: string;
      additionalInfo: string;
      employeeExperienceSkills: [
        {
          id: number;
          name: string;
        }
      ];
    }
  ];
}
