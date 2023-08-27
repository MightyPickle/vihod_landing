import React, { useState } from 'react';
import { MinWrapper, Wrapper } from '../Education/Style';
import { StyledNote } from '../Note/Style';
import FriendsGraph from './FriendsGraph';
import { UserPortraitQuestions } from '../../data/enums/portrait/enumQuestionsPortrait';
import { useDataContext } from '../../context/dataContext';
import FamilyGrapgh from './FamilyGrapgh';
import SchoolAndWorkGraph from './SchoolAndWorkGraph';
import { Tab, Tabs } from './Style';

const tabs = {
  [UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT]: {
    title: 'Открытость друзьям',
    tabName: 'Друзья',
    Graph: FriendsGraph,
  },
  [UserPortraitQuestions.FAMILY_AWARE_OF_LGBT]: {
    title: 'Открытость родственникам',
    tabName: 'Родственники',
    Graph: FamilyGrapgh,
  },
  [UserPortraitQuestions.CLASSMATES_COLLEAGUES_AWARE_OF_LGBT]: {
    title: 'Открытость в учебном/рабочем коллестиве',
    tabName: 'Учебный и рабочий коллектив',
    Graph: SchoolAndWorkGraph,
  },
};
function SocialAwareness() {
  const [activeTab, setActiveTab] = useState(tabs[UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT]);
  const { cisTransData, awareData } = useDataContext();
  const totalCis = cisTransData.cisData.length;
  const totalTrans = cisTransData.transData.length;
  return (
    <Wrapper>
      <MinWrapper>

        <h4>
          Открытость перед друзьями
        </h4>
        <activeTab.Graph awareData={awareData} totalTrans={totalTrans} totalCis={totalCis} />
        <Tabs>
          {Object.keys(tabs).map((el) => <Tab isActive={tabs[el].tabName === activeTab.tabName} onClick={() => setActiveTab(tabs[el])}>{tabs[el].tabName}</Tab>)}

        </Tabs>
      </MinWrapper>
    </Wrapper>
  );
}

export default SocialAwareness;
