import { Bar } from 'recharts';
import React from 'react';
import { UserPortraitQuestions } from '../../../data/enums/portrait/enumQuestionsPortrait';
import { filterDataByEnum } from '../../../data/utils/filterDataByEnum';
import { SettlementType } from '../../../data/enums/portrait/enumAnswersPortrait';
import type { Props } from './types';
import EducationGraphWrapper from './components/EducationGraphWrapper';

function EducationTransCisGraph({ educationData }: Props) {
  const data = [
    {
      name: 'Начальное',
      Мегаполис: filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEGAPOLIS)?.length,
      'Город (от 1 млн. до 4 млн.)': filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.CITY).length,
      'Город (от 500 тыс. до 1 млн.)': filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.LARGE_TOWN).length,
      'Город (от 100 до 500 тыс.)': filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEDIUM_TOWN).length,
      'Малый город (до 100 тыс.)': filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SMALL_TOWN).length,
      'Сельское поселение': filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SELO).length,
    }, {
      name: 'Среднее общее',
      Мегаполис: filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEGAPOLIS)?.length,
      'Город (от 1 млн. до 4 млн.)': filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.CITY).length,
      'Город (от 500 тыс. до 1 млн.)': filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.LARGE_TOWN).length,
      'Город (от 100 до 500 тыс.)': filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEDIUM_TOWN).length,
      'Малый город (до 100 тыс.)': filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SMALL_TOWN).length,
      'Сельское поселение': filterDataByEnum(educationData.hasBasicDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SELO).length,
    }, {
      name: 'Среднее профессиональное',
      Мегаполис: filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEGAPOLIS)?.length,
      'Город (от 1 млн. до 4 млн.)': filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.CITY).length,
      'Город (от 500 тыс. до 1 млн.)': filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.LARGE_TOWN).length,
      'Город (от 100 до 500 тыс.)': filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEDIUM_TOWN).length,
      'Малый город (до 100 тыс.)': filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SMALL_TOWN).length,
      'Сельское поселение': filterDataByEnum(educationData.hasBasicSpecialDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SELO).length,
    }, {
      name: 'Высшее',
      Мегаполис: filterDataByEnum(educationData.hasPrimaryDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEGAPOLIS)?.length,
      'Город (от 1 млн. до 4 млн.)': filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.CITY).length,
      'Город (от 500 тыс. до 1 млн.)': filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.LARGE_TOWN).length,
      'Город (от 100 до 500 тыс.)': filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.MEDIUM_TOWN).length,
      'Малый город (до 100 тыс.)': filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SMALL_TOWN).length,
      'Сельское поселение': filterDataByEnum(educationData.hasCollegeDegreeData, UserPortraitQuestions.RESIDENCE, SettlementType.SELO).length,
    },
  ];

  return (
    <EducationGraphWrapper data={data}>
      <Bar dataKey="Мегаполис" fill="#979AFF" />
      <Bar dataKey="Город (от 1 млн. до 4 млн.)" fill="#961AFF" />
      <Bar dataKey="Город (от 500 тыс. до 1 млн.)" fill="#121AFF" />
      <Bar dataKey="Город (от 100 до 500 тыс.)" fill="#231AFF" />
      <Bar dataKey="Малый город (до 100 тыс.)" fill="#367AFF" />
      <Bar dataKey="Сельское поселение" fill="#499AFF" />
    </EducationGraphWrapper>
  );
}

export default EducationTransCisGraph;
