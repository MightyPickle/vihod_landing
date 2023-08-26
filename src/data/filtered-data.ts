import { allData } from './data';
import {
  YES, NO, OTHER, HOMO, BI, HETERO, ASEX,
} from './const';
import { UserPortraitQuestions } from './enums/enumQuestionsPortrait';

// Цис/транс
export const transData = allData.filter((el) => el[UserPortraitQuestions[UserPortraitQuestions.TRANSGENDER_IDENTITY]] === YES);
export const cisData = allData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === NO);
export const otherTransData = allData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === OTHER);

// Ориентация
export const homoData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === HOMO);
export const biPanData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === BI);
export const heteroData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === HETERO);
export const asexData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === ASEX);
export const otherOrientationData = allData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === OTHER);

// Тип населенного пункта
