import { allData } from './data';
import { YES, NO, OTHER } from './const';
import { UserPortraitQuestions } from './enums/enumQuestionsPortrait';
import { Gender, SexualOrientation } from './enums/enumAnswersPortrait';

// Гендер
export const maleData = allData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.MALE);
export const femaleData = allData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.FEMALE);
export const otherGenderData = allData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.OTHER);

// Цис/транс
export const transData = allData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === YES);
export const cisData = allData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === NO);
export const otherTransData = allData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === OTHER);

// Ориентация
export const homoData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HOMO);
export const biPanData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.BI);
export const heteroData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HETERO);
export const asexData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.ASEX);
export const otherOrientationData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.OTHER);

// Тип населенного пункта

// Регионы
