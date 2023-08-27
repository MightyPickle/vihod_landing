import React, { useMemo, useState } from 'react';
import { StyledNote } from '../Note/Style';
import EducationTransCisGraph from './Graphs/EducationTransCisGraph';
import { UserPortraitQuestions } from '../../data/enums/portrait/enumQuestionsPortrait';
import {
  MinWrapper, Tab, Tabs, Wrapper,
} from './Style';
import EducationResidenceGraph from './Graphs/EducationResidenceGraph';
import { useDataContext } from '../../context/dataContext';

const tabs = [UserPortraitQuestions.TRANSGENDER_IDENTITY, UserPortraitQuestions.RESIDENCE];

const getTitle = (tab:UserPortraitQuestions) => {
  if (tab === UserPortraitQuestions.TRANSGENDER_IDENTITY) {
    return 'по трансгендерной идентичности';
  }
  if (tab === UserPortraitQuestions.RESIDENCE) {
    return 'по типу места проживания';
  }
  return '';
};

const getButtonTitle = (tab:UserPortraitQuestions) => {
  if (tab === UserPortraitQuestions.TRANSGENDER_IDENTITY) {
    return 'Трансгендерная идентичность';
  }
  if (tab === UserPortraitQuestions.RESIDENCE) {
    return 'Тип места проживания';
  }
  return '';
};

function Education() {
  const [activeTab, setActiveTab] = useState<UserPortraitQuestions>(UserPortraitQuestions.TRANSGENDER_IDENTITY);
  // @ts-ignore
  const { educationData } = useDataContext(); // EducationDataType

  const onTabClick = (tab:UserPortraitQuestions) => {
    setActiveTab(tab);
  };

  const content = useMemo(() => {
    if (activeTab === UserPortraitQuestions.TRANSGENDER_IDENTITY) return <EducationTransCisGraph educationData={educationData} />;
    if (activeTab === UserPortraitQuestions.RESIDENCE) return <EducationResidenceGraph educationData={educationData} />;
    return null;
  }, [activeTab, educationData]);

  return (
    <Wrapper>
      <StyledNote>
        Как и в исследованиях «Выхода» и «Сферы», наши участники преимущественно имеют высшее образование или находятся в процессе его получения
      </StyledNote>
      <MinWrapper>
        <h4>
          Сравнение образования
          {' '}
          {getTitle(activeTab)}
        </h4>
        {content}
        <Tabs>
          {tabs.map((el) => <Tab isActive={el === activeTab} key={el} onClick={() => onTabClick(el)}>{getButtonTitle(el)}</Tab>)}
        </Tabs>
      </MinWrapper>
    </Wrapper>
  );
}

export default Education;
