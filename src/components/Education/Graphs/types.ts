export type EducationDataType = {
  hasPrimaryDegreeData: Record<string, string>[]
  hasCollegeDegreeData: Record<string, string>[]
  hasBasicDegreeData: Record<string, string>[]
  hasBasicSpecialDegreeData: Record<string, string>[]
};

export type Props = {
  educationData:EducationDataType };
