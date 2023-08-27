import React from 'react';
import OrientationGraph from '../rechartComponents/Orientation/OrientationGraph';
import QuoteBlock, {
  Column, FlexSection, SectionsWrapper, TitleWrapper,
} from './Style';
import Education from '../Education/Education';
import SocialAwareness from '../Social/SocialAwareness';
import { Wrapper } from '../Education/Style';
import StatisticCard from '../StatisticCard/StatisticCard';
import { StyledNote } from '../Note/Style';

function PortraitInformation() {
  return (
    <>
      <StatisticCard />
      <TitleWrapper>
        <h2>Демографический портрет участников опроса</h2>
      </TitleWrapper>

      <SectionsWrapper>
        <FlexSection>
          <Column $flex={2} $flexDirection="column">
            <p>
              Основной целью нашего исследования было определить количество случаев
              дискриминации на почве гомофобии и трансфобии, произошедших в России в 2022
              году.
            </p>
            <p>
              Мы также ставили перед собой задачу оценить качество жизни ЛГБТ+ людей
              в России, их материальное положение, жилищные условия, доступ к образованию,
              медицине и различным услугам.
            </p>
            <p>
              Кроме того, мы стремились оценить влияние войны в Украине и всех сопутствующих ей процессов (усиление цензуры и репрессий, санкции, мобилизация и пр.) на российских ЛГБТ+ людей.
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

        <FlexSection $flexDirection="column">
          <h3>Степень открытости и круг обращения</h3>
          <SocialAwareness />
        </FlexSection>

        <FlexSection>
          <h3>Экономическое положение ЛГБТ+ людей</h3>
          <Wrapper>
            <FlexSection>
              <Column>
                <StyledNote>
                  Если сопоставить доход всех участников исследования и опрошенных
                  трансгендерных людей, мы увидим, что доля последних заметно выше в категориях с меньшим доходом и заметно ниже в категориях с большим доходом. Это свидетельствует о тяжёлом экономическом положении многих трансгендерных
                  персон.
                </StyledNote>
              </Column>
            </FlexSection>
            <QuoteBlock
              margin="20px 40% 20px 20px"
              text="«В прошлом я потеряла работу из-за аутинга на рабочем месте. Теперь я заранее не рассматриваю многие вакансии, которые мне были бы интересны»"
              author="Бисексуальная цисгендерная женщина, 33 года, Санкт-Петербург"
            />
            <QuoteBlock
              margin="0px 20px 20px 40%"
              text="«Из-за указания неактуальных мужских ФИО в справке о несудимости работодатели
            отказываются брать меня на работу, но напрямую об этом не говорят, находя другие
            причины отказа в трудоустройстве»"
              author="Бисексуальная небинарная трансгендерная женщина, 29 лет, Татарстан"
            />

            <FlexSection>
              <p>
                ЛГБТ+ люди сталкиваются с увольнениями из-за СОГИ, сами вынужденно
                покидают места работы или учёбы из-за дискриминации, их карьерные возможности зачастую ограничены. Многие оказываются без материальной поддержки
                родственников после каминг-аута (или постоянно рискуют оказаться в этом положении, скрывая свою идентичность).
              </p>
            </FlexSection>
          </Wrapper>
        </FlexSection>
        <TitleWrapper>
          <h2>Насилие и нападения на почве ненависти</h2>
        </TitleWrapper>
        <FlexSection>
          <Column>
            <p>
              Трансгендерные люди гораздо уязвимее и сталкиваются практически со всеми видами насилия и дискриминации гораздо чаще, чем цисгендерные респонденты. Исключение составляют только шантаж и вымогательства, от них чаще страдают гомосексуальные цисгендерные мужчины, преимущественно пользователи
              «Хорнета».
            </p>
          </Column>
        </FlexSection>
      </SectionsWrapper>
    </>
  );
}

export default PortraitInformation;
