import React, { useContext, useEffect, useState } from 'react';

import { YES, NO, OTHER } from '../data/const';
import { UserPortraitQuestions } from '../data/enums/enumQuestionsPortrait';
import { Gender, SexualOrientation } from '../data/enums/enumAnswersPortrait';

const enumValues = Object.values(UserPortraitQuestions);

// Гендер
const DataContext = React.createContext();

function DataContextProvider({ children }: { children: any }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      fetch('http://localhost:3001/data')
        .then((result) => result.json())
        .then(((res) => res.map((obj) => Object.entries(obj).reduce((filteredObj, [key, value]) => {
        // @ts-ignore
          if (enumValues.includes(key)) {
          // eslint-disable-next-line no-param-reassign
            filteredObj[key] = value;
          }
          return filteredObj;
        }, {}))))
        .then((newData) => setData(newData));
    }
  }, []);

  // Гендер
  const maleData = data.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.MALE);
  const femaleData = data.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.FEMALE);
  const nonBinaryGenderData = data.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.NON_BINAIRY);
  const otherGenderData = data.filter((el) => {
    const gender = el[UserPortraitQuestions.GENDER_IDENTITY];
    return gender !== Gender.MALE && gender !== Gender.FEMALE && gender !== Gender.NON_BINAIRY;
  });

  // Цис/транс
  const transData = data.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === YES);
  const cisData = data.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === NO);
  const otherTransData = data.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === OTHER); // 0

  // Ориентация
  const homoData = data.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HOMO);
  const biPanData = data.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.BI);
  const heteroData = data.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HETERO);
  const asexData = data.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.ASEX);
  const otherOrientationData = data.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.OTHER); // 0

  // Тип населенного пункта

  // Регионы

  const filteredData = {
    maleData, femaleData, nonBinaryGenderData, otherGenderData, transData, cisData, otherTransData, homoData, biPanData, asexData, heteroData, otherOrientationData,
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{ setData, data, filteredData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
