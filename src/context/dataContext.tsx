import React, { useContext, useEffect, useState } from 'react';

import {
  YES, NO, OTHER, enumPortraitValues, enumDiscriminationQuestionsValues,
} from '../data/const';
import { UserPortraitQuestions } from '../data/enums/portrait/enumQuestionsPortrait';
import {
  ClassmatesColleaguesAwareness,
  EducationLevel,
  FamilyAwareness,
  FederalDistrict,
  FriendsAwareness,
  Gender, Regions,
  SettlementType,
  SexualOrientation,
  SocialCircle, SocialCircleAttitude,
} from '../data/enums/portrait/enumAnswersPortrait';
import { filterDataByEnum } from '../data/utils/filterDataByEnum';
import { EmploymentQuestions, ViolenceQuestions } from '../data/enums/discrimination/enumQuestionsDiscrimination';
import { ViolenceAnswers } from '../data/enums/discrimination/enumAnswersDiscrimination';

// @ts-ignore
const DataContext = React.createContext();

const getPortraitData = (newData: Record<string, string>[]) => newData.map((obj) => Object.entries(obj).reduce((filteredObj, [key, value]) => {
  // @ts-ignore
  if (enumPortraitValues.includes(key)) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    filteredObj[key] = value;
  }
  return filteredObj;
}, {}));

const getDiscriminationData = (newData: Record<string, string>[]) => newData.map((obj) => Object.entries(obj).reduce((filteredObj, [key, value]) => {
  // @ts-ignore
  if (enumDiscriminationQuestionsValues.includes(key)) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    filteredObj[key] = value;
  }
  return filteredObj;
}, {}));

function DataContextProvider({ children }: { children: any }) {
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [portraitData, setPortraitData] = useState<Record<string, string>[]>([]);
  const [discriminationData, setDiscriminationData] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!data.length) {
        fetch('http://localhost:3001/data')
          .then((result) => result.json())
          .then((newData) => {
            setData(newData);
            setPortraitData(getPortraitData(newData));
            setDiscriminationData(getDiscriminationData(newData));
          });
      }
    }, 4400);
    return () => {
      clearTimeout(id);
    };
  }, []);

  // Гендер
  const genderData = {
    maleData: filterDataByEnum(portraitData, UserPortraitQuestions.GENDER_IDENTITY, Gender.MALE),
    femaleData: filterDataByEnum(portraitData, UserPortraitQuestions.GENDER_IDENTITY, Gender.FEMALE),
    nonBinaryGenderData: filterDataByEnum(portraitData, UserPortraitQuestions.GENDER_IDENTITY, Gender.NON_BINAIRY),
    otherGenderData: portraitData.filter((el) => {
      const gender = el[UserPortraitQuestions.GENDER_IDENTITY];
      return gender !== Gender.MALE && gender !== Gender.FEMALE && gender !== Gender.NON_BINAIRY;
    }),
  };

  // Цис/транс
  const cisTransData = {
    transData: filterDataByEnum(portraitData, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES),
    cisData: filterDataByEnum(portraitData, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO),
    otherTransData: filterDataByEnum(portraitData, UserPortraitQuestions.TRANSGENDER_IDENTITY, OTHER),
  };

  // Ориентация
  const orientationData = {
    homoData: filterDataByEnum(portraitData, UserPortraitQuestions.SEXUAL_ORIENTATION, SexualOrientation.HOMO),
    biPanData: filterDataByEnum(portraitData, UserPortraitQuestions.SEXUAL_ORIENTATION, SexualOrientation.BI),
    heteroData: filterDataByEnum(portraitData, UserPortraitQuestions.SEXUAL_ORIENTATION, SexualOrientation.HETERO),
    asexData: filterDataByEnum(portraitData, UserPortraitQuestions.SEXUAL_ORIENTATION, SexualOrientation.ASEX),
    otherOrientationData: filterDataByEnum(portraitData, UserPortraitQuestions.SEXUAL_ORIENTATION, SexualOrientation.OTHER),
  };

  // Тип населенного пункта
  const settlementData = {
    megaPolisData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.MEGAPOLIS),
    cityData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.CITY),
    largeTownData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.LARGE_TOWN),
    mediumTownData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.MEDIUM_TOWN),
    smallTownData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.SMALL_TOWN),
    seloData: filterDataByEnum(portraitData, UserPortraitQuestions.RESIDENCE, SettlementType.SELO),
  };

  // Регионы
  const federalDistrictData = {
    centralRegionData: filterDataByEnum(portraitData, UserPortraitQuestions.FEDERAL_DISTRICT, FederalDistrict.CENTRAL),
    northWestRegionData: filterDataByEnum(portraitData, UserPortraitQuestions.FEDERAL_DISTRICT, FederalDistrict.NORTHWEST),
    // Продолжайте для остальных регионов
  };

  // Образование
  const educationData = {
    hasPrimaryDegreeData: filterDataByEnum(portraitData, UserPortraitQuestions.EDUCATION, EducationLevel.PRIMARY),
    hasCollegeDegreeData: filterDataByEnum(portraitData, UserPortraitQuestions.EDUCATION, EducationLevel.HIGHER),
    hasBasicDegreeData: filterDataByEnum(portraitData, UserPortraitQuestions.EDUCATION, EducationLevel.BASIC),
    hasBasicSpecialDegreeData: filterDataByEnum(portraitData, UserPortraitQuestions.EDUCATION, EducationLevel.BASIC_SPECIAL),
  };

  // Социальная
  // Друзья
  const friendsAwareData = {
    majorityFriendsAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT, FriendsAwareness.MAJORITY_OF_FRIENDS),
    noFriendsAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT, FriendsAwareness.NO_ONE_KNOWS),
    closestFriendsAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT, FriendsAwareness.CLOSEST_FRIENDS),
    otherFriendsAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT, FriendsAwareness.OTHER),
  };

  // Семья
  const familyAwareData = {
    majorityFamilyAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FAMILY_AWARE_OF_LGBT, FamilyAwareness.MAJORITY_OF_FAMILY_MEMBERS),
    noFamilyAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FAMILY_AWARE_OF_LGBT, FamilyAwareness.NO_ONE_KNOWS),
    closestFamilyAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FAMILY_AWARE_OF_LGBT, FamilyAwareness.CLOSEST_FAMILY_MEMBERS),
    otherFamilyAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.FAMILY_AWARE_OF_LGBT, FamilyAwareness.OTHER),
  };

  // Коллеги/одногруппники/одноклассники
  const classmatesColleaguesAwareData = {
    majorityClassmatesColleaguesAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT, ClassmatesColleaguesAwareness.MAJORITY_OF_CLASSMATES_COLLEAGUES),
    noClassmatesColleaguesAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT, ClassmatesColleaguesAwareness.NO_ONE_KNOWS),
    closestClassmatesColleaguesAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT, ClassmatesColleaguesAwareness.SOME_CLASSMATES_COLLEAGUES),
    otherClassmatesColleaguesAwareData: filterDataByEnum(portraitData, UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT, ClassmatesColleaguesAwareness.OTHER),
  };

  const awareData = {
    friendsAwareData, familyAwareData, classmatesColleaguesAwareData,
  };

  // Близкий круг
  const socialCircleData = {
    socialCircleMainlyLGBT: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircle.LGBT_PLUS),
    socialCircleMainlyHeteroCis: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircle.HETERO_CIS),
    socialCircleEqual: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircle.EQUAL_MIX),
  };

  const socialCircleAttitudeData = {
    socialCircleFriendlyAttitude: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_ATTITUDE, SocialCircleAttitude.FRIENDLY_TO_LGBT_PLUS),
    socialCircleClaimFriendlyAttitude: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircleAttitude.CLAIM_FRIENDLY_ATTITUDE),
    socialCircleHomoTransphobicAttitude: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircleAttitude.HOMO_TRANS_PHOBIC),
    socialCircleAcceptingAttitude: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircleAttitude.ACCEPTING_BUT_OCCASIONAL_PHOBIA),
    socialCircleOtherAttitude: filterDataByEnum(portraitData, UserPortraitQuestions.SOCIAL_CIRCLE_LGBT, SocialCircleAttitude.OTHER),
  };

  // Регионы
  const regionData = Object.values(Regions).reduce((regionObjData, regionKey) => {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    regionObjData[regionKey] = filterDataByEnum(portraitData, UserPortraitQuestions.REGION, regionKey);
    return regionObjData;
  }, {});

  // Дискриминация
  // Учеба/работа
  const employmentDiscriminationData = {
    pressureData: filterDataByEnum(discriminationData, EmploymentQuestions.PRESSURE_DUE_TO_IDENTITY, YES),
    jobLossData: filterDataByEnum(discriminationData, EmploymentQuestions.JOB_OR_EDUCATION_LOSS, YES),
  };

  // Насилие
  const violenceDiscriminationData = {
    physicalViolenceData: filterDataByEnum(discriminationData, ViolenceQuestions.PHYSICAL_VIOLENCE, YES),
    sexualViolenceData: filterDataByEnum(discriminationData, ViolenceQuestions.SEXUAL_VIOLENCE, YES),
    threatsData: filterDataByEnum(discriminationData, ViolenceQuestions.THREATS_OF_PHYSICAL_VIOLENCE, YES),
    domesticViolenceData: filterDataByEnum(discriminationData, ViolenceQuestions.DOMESTIC_VIOLENCE, YES),
    propertyDamageData: filterDataByEnum(discriminationData, ViolenceQuestions.PROPERTY_DAMAGE, YES),
    robberyData: filterDataByEnum(discriminationData, ViolenceQuestions.ROBBERY, YES),
    blackmailData: filterDataByEnum(discriminationData, ViolenceQuestions.BLACKMAIL, YES),
    illegalDataUseData: filterDataByEnum(discriminationData, ViolenceQuestions.ILLEGAL_USE_OF_PERSONAL_DATA, YES),
    onlineHarassmentData: filterDataByEnum(discriminationData, ViolenceQuestions.ONLINE_HARASSMENT, YES),
    unlawfulDetentionData: filterDataByEnum(discriminationData, ViolenceQuestions.UNLAWFUL_DETENTION_OR_ARREST, YES),
  };

  // Соотнесение сталкивания и обращения в полицию (или намерения обращения)
  const crimesPoliceEncounterData = {
    noEncounterReportPolice: filterDataByEnum(discriminationData, ViolenceQuestions.CRIMES_DUE_TO_HOMOPHOBIA, ViolenceAnswers.NO_ENCOUNTER_WOULD_REPORT_TO_POLICE),
    encounterReportPolice: filterDataByEnum(discriminationData, ViolenceQuestions.CRIMES_DUE_TO_HOMOPHOBIA, ViolenceAnswers.ENCOUNTERED_AND_REPORTED_TO_POLICE),
    encounterNotReportPolice: filterDataByEnum(discriminationData, ViolenceQuestions.CRIMES_DUE_TO_HOMOPHOBIA, ViolenceAnswers.ENCOUNTERED_BUT_DID_NOT_REPORT_TO_POLICE),
    noEncounterNotReportPolice: filterDataByEnum(discriminationData, ViolenceQuestions.CRIMES_DUE_TO_HOMOPHOBIA, ViolenceAnswers.NO_ENCOUNTER_WOULD_NOT_REPORT_TO_POLICE),
  };

  const filteredDiscriminationData = {
    violenceDiscriminationData, employmentDiscriminationData, crimesPoliceEncounterData,
  };

  const filteredPortraitData = {
    genderData,
    cisTransData,
    orientationData,
    settlementData,
    educationData,
    regionData,
    federalDistrictData,
    awareData,
    socialCircleData,
    socialCircleAttitudeData,
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{
      setData,
      data,
      countAnswers: data.length,
      filteredDiscriminationData,
      ...filteredPortraitData,
    }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
