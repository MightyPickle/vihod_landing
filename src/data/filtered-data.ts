import { portraitDataportraitData, portraitData } from './data';
import { YES, NO, OTHER } from './const';
import { UserPortraitQuestions } from './enums/enumQuestionsPortrait';
import { Gender, SexualOrientation } from './enums/enumAnswersPortrait';

// Гендер
export const maleData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.MALE);
export const femaleData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.FEMALE);
export const nonBinaryGenderData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.NON_BINAIRY);
export const otherGenderData = portraitData.filter((el) => {
  const gender = el[UserPortraitQuestions.GENDER_IDENTITY];
  return gender !== Gender.MALE && gender !== Gender.FEMALE && gender !== Gender.NON_BINAIRY;
});

// Цис/транс
export const transData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === YES);
export const cisData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === NO);
export const otherTransData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === OTHER); // 0

// Ориентация
export const homoData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HOMO);
export const biPanData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.BI);
export const heteroData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HETERO);
export const asexData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.ASEX);
export const otherOrientationData = portraitDataportraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.OTHER); // 0

// Тип населенного пункта

// Регионы
