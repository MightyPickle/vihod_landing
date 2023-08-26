import { UserPortraitQuestions } from './enums/portrait/enumQuestionsPortrait';
import { EmploymentQuestions, ViolenceQuestions } from './enums/discrimination/enumQuestionsDiscrimination';

export const enumPortraitValues = Object.values(UserPortraitQuestions);
export const enumDiscriminationQuestionsValues = [Object.values(ViolenceQuestions), Object.values(EmploymentQuestions)].flat();

// Общее
export const YES = 'Да';
export const NO = 'Нет';
export const OTHER = 'Другое';
