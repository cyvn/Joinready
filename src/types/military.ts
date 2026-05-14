export type MilitaryBase = {
  id: string;
  name: string;
  country: string;
  city?: string;
  region?: string;
  latitude: number;
  longitude: number;
  branchRelevance: string;
};

export type MilitaryBranch = {
  id: string;
  name: string;
  nameLocal?: string;
  displayName?: string;
  overview: string;
  eligibilitySummary: string;
  trainingSummary: string;
  careerPaths: string[];
  considerations: string[];
  bases: MilitaryBase[];
};

export type CountryMilitaryData = {
  countryCode: string;
  countryName: string;
  branches: MilitaryBranch[];
  notes?: string;
};

export type CountryOption = {
  code: string;
  name: string;
};
