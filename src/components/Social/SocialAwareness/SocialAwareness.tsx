import React, { useState } from 'react';
import { MinWrapper } from '../../Education/Style';
import FriendsGraph from './FriendsGraph';
import { UserPortraitQuestions } from '../../../data/enums/portrait/enumQuestionsPortrait';
import { useDataContext } from '../../../context/dataContext';
import FamilyGraph from './FamilyGrapgh';
import SchoolAndWorkGraph from './SchoolAndWorkGraph';
import { Tab, Tabs } from '../Style';
import { Column, FlexSection } from '../../PortraitInformation/Style';

const tabs = {
  [UserPortraitQuestions.FRIENDS_AWARE_OF_LGBT]: {
    title: 'Открытость друзьям',
    tabName: 'Друзья',
    Graph: FriendsGraph,
  },
  [UserPortraitQuestions.FAMILY_AWARE_OF_LGBT]: {
    title: 'Открытость родственникам',
    tabName: 'Родственники',
    Graph: FamilyGraph,
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
    <FlexSection>
      <MinWrapper>
        <h4>
          {activeTab.title}
        </h4>
        <activeTab.Graph awareData={awareData} totalTrans={totalTrans} totalCis={totalCis} />
        <Tabs>
          {Object.keys(tabs).map((el) => <Tab isActive={tabs[el].tabName === activeTab.tabName} onClick={() => setActiveTab(tabs[el])}>{tabs[el].tabName}</Tab>)}
        </Tabs>
      </MinWrapper>
      <Column $flexDirection="column">
        <p>
          ЛГБТ+ люди гораздо чаще делают каминг-ауты перед друзьями, нежели перед
          родственниками, коллегами, однокурсниками или одноклассниками.
        </p>
        <p>
          Трансгендерные персоны чаще оказываются более открытыми, поскольку,
          как можно предположить, им сложнее скрывать свою трансгендерность от окружающих.
        </p>
      </Column>
    </FlexSection>
  );
}

export default SocialAwareness;
