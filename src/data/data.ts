// @ts-ignore
import data from './answers.json';
import { UserPortraitQuestions } from './enums/enumQuestionsPortrait';

export const allData = data;

const enumValues = Object.values(UserPortraitQuestions);

export const portraitData = allData.map((obj) => Object.entries(obj).reduce((filteredObj, [key, value]) => {
  if (enumValues.includes(key)) {
    // eslint-disable-next-line no-param-reassign
    filteredObj[key] = value;
  }
  return filteredObj;
}, {}));
