import { Bar } from 'recharts';
import React from 'react';
import { UserPortraitQuestions } from '../../../data/enums/portrait/enumQuestionsPortrait';
import { NO, YES } from '../../../data/const';
import { filterDataByEnum } from '../../../data/utils/filterDataByEnum';
import type { Props } from './types';
import EducationGraphWrapper from './components/EducationGraphWrapper';

function EducationTransCisGraph({ educationData }: Props) {
  const data = [
    {
      name: 'Начальное',
      tooltip: 'Начальное (1-8 классы школы)',
      Трансперсоны: filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES).length,
      Цисгендер: filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO).length,
    }, {
      name: 'Среднее общее',
      tooltip: 'Среднее общее (9-11 классов школы)',
      Трансперсоны: filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES).length,
      Цисгендер: filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO).length,
    }, {
      name: 'Среднее профессиональное',
      tooltip: 'Среднее профессиональное (колледж, техникум)',
      Трансперсоны: filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES).length,
      Цисгендер: filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO).length,
    }, {
      name: 'Высшее',
      tooltip: 'Высшее (включая высшее неполное, полное, а также ученую степень)',
      Трансперсоны: filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES).length,
      Цисгендер: filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO).length,
    },
  ];

  return (
    <EducationGraphWrapper data={data}>
      <Bar dataKey="Цисгендер" fill="#5BCEFA" />
      <Bar dataKey="Трансперсоны" fill="#F5A9B8" />
    </EducationGraphWrapper>
  );
}

export default EducationTransCisGraph;
