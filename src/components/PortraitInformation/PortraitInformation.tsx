import React from 'react';
import OrientationGraph from '../rechartComponents/Orientation/OrientationGraph';
import { Column, FlexSection } from './Style';
import Education from '../Education/Education';
import FriendsGraph from '../rechartComponents/Social/FriendsGraph';
import StatisticCard from '../StatisticCard/StatisticCard';

function PortraitInformation() {
  return (
    <>
      <StatisticCard />
      <h2>Демографический портрет участников опроса</h2>
      <FlexSection>
        <Column>
          <p>
            Наш массив данных составляют 6439 анкет. Из них 104 были собраны в формате личной коммуникации социальными работниками, 4480 – через социальные сети и таргетированную рекламу, а 1855 были получены с помощью рекламы
            в «Хорнете».
          </p>
        </Column>
        <Column>
          <OrientationGraph />
        </Column>
      </FlexSection>
      <FlexSection>
        <h3>Образование</h3>
        <Education />
      </FlexSection>
      <FlexSection>
        <h3>Степень открытости и круг обращения</h3>
        <div>{/* тут должен быть текст */}</div>
        <FriendsGraph />
      </FlexSection>
      <p>
        Трансгендерные люди составляют 18% от всех респондентов. Статистически
        они моложе: их средний возраст – 25,2 года, а медианный – 23 года. Практически
        половина опрошенных трансгендерных персон (48%) живёт в крупнейших городах
        России: в Москве (26%) и в Санкт-Петербурге (22%).
      </p>
      <div>график трансгендерноссти</div>
      <div>график ориентации</div>
      <p>
        Больше всего опрошенных проживают или проживали в Москве (23%) и
        Санкт-Петербурге (19%). Соответственно, ситуация в этих городах и федеральных округах, которые к ним относятся (Центральный и Северо-Западный соответственно) представлена в нашем исследовании лучше всего. Значительно недопредставлены Южный федеральный округ, Северо-Кавказский и Приволжский округа.
      </p>
      <div>график распределения по регионам</div>

    </>
  );
}

export default PortraitInformation;
