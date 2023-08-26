import React, { useContext, useEffect, useState } from 'react';

import { YES, NO, OTHER } from '../data/const';
import { UserPortraitQuestions } from '../data/enums/enumQuestionsPortrait';
import {
  ClassmatesColleaguesAwareness,
  EducationLevel,
  FamilyAwareness,
  FederalDistrict,
  FriendsAwareness,
  Gender,
  SettlementType,
  SexualOrientation,
  SocialCircle, SocialCircleAttitude,
} from '../data/enums/enumAnswersPortrait';

const enumValues = Object.values(UserPortraitQuestions);

// Гендер
const DataContext = React.createContext();

function DataContextProvider({ children }: { children: any }) {
  const [data, setData] = useState([]);
  const [portraitData, setPortraitData] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!data.length) {
        fetch('http://localhost:3001/data')
          .then((result) => result.json())
          .then((newData) => {
            setData(newData);
            const newPortraitData = newData.map((obj) => Object.entries(obj).reduce((filteredObj, [key, value]) => {
            // @ts-ignore
              if (enumValues.includes(key)) {
              // eslint-disable-next-line no-param-reassign
                filteredObj[key] = value;
              }
              return filteredObj;
            }, {}));
            setPortraitData(newPortraitData);
          });
      }
    }, 4400);
    return () => {
      clearTimeout(id);
    };
  }, []);

  // Гендер
  const maleData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.MALE);
  const femaleData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.FEMALE);
  const nonBinaryGenderData = portraitData.filter((el) => el[UserPortraitQuestions.GENDER_IDENTITY] === Gender.NON_BINAIRY);
  const otherGenderData = portraitData.filter((el) => {
    const gender = el[UserPortraitQuestions.GENDER_IDENTITY];
    return gender !== Gender.MALE && gender !== Gender.FEMALE && gender !== Gender.NON_BINAIRY;
  });
  const genderData = {
    maleData, femaleData, nonBinaryGenderData, otherGenderData,
  };

  // Цис/транс
  const transData = portraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === YES);
  const cisData = portraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === NO);
  const otherTransData = portraitData.filter((el) => el[UserPortraitQuestions.TRANSGENDER_IDENTITY] === OTHER); // 0

  const cisTransData = { transData, cisData, otherTransData };

  // Ориентация
  const homoData = portraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HOMO);
  const biPanData = portraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.BI);
  const heteroData = portraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.HETERO);
  const asexData = portraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.ASEX);
  const otherOrientationData = portraitData.filter((el) => el[UserPortraitQuestions.SEXUAL_ORIENTATION] === SexualOrientation.OTHER); // 0

  const orientationData = {
    homoData, biPanData, asexData, heteroData, otherOrientationData,
  };

  // Тип населенного пункта
  const megaPolisData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.MEGAPOLIS);
  const cityData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.CITY);
  const largeTownData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.LARGE_TOWN);
  const mediumTownData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.MEDIUM_TOWN);
  const smallTownData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.SMALL_TOWN);
  const seloData = portraitData.filter((el) => el[UserPortraitQuestions.RESIDENCE] === SettlementType.SELO);

  const settlementData = {
    megaPolisData, cityData, largeTownData, meduiumTownData: mediumTownData, smallTownData, seloData,
  };

  // Регионы
  const centralRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.CENTRAL);
  const northWestRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.NORTHWEST);
  const southernRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.SOUTHERN);
  const northCaucasusRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.NORTH_CAUCASUS);
  const volgaRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.VOLGA);
  const uralsRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.URALS);
  const siberianRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.SIBERIAN);
  const farEasternRegionData = portraitData.filter((el) => el[UserPortraitQuestions.FEDERAL_DISTRICT] === FederalDistrict.FAR_EASTERN);

  const regionData = {
    centralRegionData,
    northCaucasusRegionData,
    northWestRegionData,
    southernRegionData,
    volgaRegionData,
    uralsRegionData,
    siberianRegionData,
    farEasternRegionData,
  };

  // Образование
  const hasPrimaryDegreeData = data.filter((el) => el[UserPortraitQuestions.EDUCATION] === EducationLevel.PRIMARY);
  const hasBasicDegreeData = data.filter((el) => el[UserPortraitQuestions.EDUCATION] === EducationLevel.BASIC);
  const hasBasicSpecialDegreeData = data.filter((el) => el[UserPortraitQuestions.EDUCATION] === EducationLevel.BASIC_SPECIAL);
  const hasCollegeDegreeData = data.filter((el) => el[UserPortraitQuestions.EDUCATION] === EducationLevel.HIGHER);

  const educationData = {
    hasPrimaryDegreeData, hasCollegeDegreeData, hasBasicDegreeData, hasBasicSpecialDegreeData,
  };

  // Социальная
  // Друзья
  const majorityFriendsAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT] === FriendsAwareness.MAJORITY_OF_FRIENDS);
  const noFriendsAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT] === FriendsAwareness.NO_ONE_KNOWS);
  const closestFriendsAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT] === FriendsAwareness.CLOSEST_FRIENDS);
  const otherFriendsAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT] === FriendsAwareness.OTHER);

  const friendsAwareData = {
    majorityFriendsAwareData, noFriendsAwareData, closestFriendsAwareData, otherFriendsAwareData,
  };

  // Семья
  const majorityFamilyAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FAMILY_AWARE_OF_LGBT] === FamilyAwareness.MAJORITY_OF_FAMILY_MEMBERS);
  const noFamilyAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FAMILY_AWARE_OF_LGBT] === FamilyAwareness.NO_ONE_KNOWS);
  const closestFamilyAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FAMILY_AWARE_OF_LGBT] === FamilyAwareness.CLOSEST_FAMILY_MEMBERS);
  const otherFamilyAwareData = portraitData.filter((el) => el[UserPortraitQuestions.FAMILY_AWARE_OF_LGBT] === FamilyAwareness.OTHER);

  const familyAwareData = {
    majorityFamilyAwareData, noFamilyAwareData, closestFamilyAwareData, otherFamilyAwareData,
  };

  // Коллеги/одногруппники/одноклассники
  const majorityClassmatesColleaguesAwareData = portraitData.filter((el) => el[UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT] === ClassmatesColleaguesAwareness.MAJORITY_OF_CLASSMATES_COLLEAGUES);
  const noClassmatesColleaguesAwareData = portraitData.filter((el) => el[UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT] === ClassmatesColleaguesAwareness.NO_ONE_KNOWS);
  const closestClassmatesColleaguesAwareData = portraitData.filter((el) => el[UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT] === ClassmatesColleaguesAwareness.SOME_CLASSMATES_COLLEAGUES);
  const otherClassmatesColleaguesAwareData = portraitData.filter((el) => el[UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT] === ClassmatesColleaguesAwareness.OTHER);

  const classmatesColleaguesAwareData = {
    majorityClassmatesColleaguesAwareData, noClassmatesColleaguesAwareData, closestClassmatesColleaguesAwareData, otherClassmatesColleaguesAwareData,
  };

  const awareData = {
    friendsAwareData, familyAwareData, classmatesColleaguesAwareData,
  };

  // Близкий круг
  const socialCircleMainlyLGBT = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircle.LGBT_PLUS);
  const socialCircleMainlyHeteroCis = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircle.HETERO_CIS);
  const socialCircleEqual = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircle.EQUAL_MIX);

  const socialCircleData = { socialCircleEqual, socialCircleMainlyLGBT, socialCircleMainlyHeteroCis };

  const socialCircleFriendlyAttitude = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_ATTITUDE] === SocialCircleAttitude.FRIENDLY_TO_LGBT_PLUS);
  const socialCircleClaimFriendlyAttitude = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircleAttitude.CLAIM_FRIENDLY_ATTITUDE);
  const socialCircleHomoTransphobicAttitude = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircleAttitude.HOMO_TRANS_PHOBIC);
  const socialCircleAcceptingAttitude = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircleAttitude.ACCEPTING_BUT_OCCASIONAL_PHOBIA);
  const socialCircleOtherAttitude = portraitData.filter((el) => el[UserPortraitQuestions.SOCIAL_CIRCLE_LGBT] === SocialCircleAttitude.OTHER);

  const socialCircleAttitudeData = {
    socialCircleFriendlyAttitude, socialCircleClaimFriendlyAttitude, socialCircleHomoTransphobicAttitude, socialCircleAcceptingAttitude, socialCircleOtherAttitude,
  };

  const filteredPortraitData = {
    genderData,
    cisTransData,
    orientationData,
    settlementData,
    educationData,
    regionData,
    awareData,
    socialCircleData,
    socialCircleAttitudeData,
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{ setData, data, filteredData: filteredPortraitData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContextProvider;
