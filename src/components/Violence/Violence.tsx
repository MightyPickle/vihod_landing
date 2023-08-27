import React, { useEffect, useState, useRef } from 'react';
import QuoteBlock, { Column, FlexSection, TitleWrapper } from '../PortraitInformation/Style';
import { Count, Title } from '../StatisticCard/Style';

function Violence() {
  const [count, setCount] = useState(0);
  const targetCount = 1955;
  const duration = 2000;

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = Date.now();

          const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime >= duration) {
              setCount(targetCount);
            } else {
              const increment = Math.floor((targetCount / duration) * elapsedTime);
              setCount(increment);
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        }
      },
      { threshold: 0.5 }, // Adjust the threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);


  return (
    <>
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
        <QuoteBlock
          margin="20px 20px 20px 40%"
          text="«В полицейском участке один раз ударили и после сказали: “таких здесь убивают”, была угроза сексуализированного насилия с помощью резиновой дубинки»"
          author="Гомосексуальный цисгендерный мужчина, 31, Москва"
        />
        <QuoteBlock
          margin="0px 40% 20px 20px"
          text="«Побили за блёстки на лице на фестивале и разбили телефон (их было трое человек). Мой основной обидчик предъявил мне, что я якобы назвал его “пидором”, затем угрожал “выебать этого пидора” (т.е. меня), называл “космическое оно” и всякое такое»"
          author="Би/пансексуальный трансгендерный мужчина, 24, Москва"
        />
        <Column $flexDirection="column">
          <p>
            Каждый третий респондент в нашей выборке подвергался одному или
            нескольким видам насилия или дискриминации из-за своей сексуальной
            ориентации и/или трансгендерности
          </p>
          <Title>
            <Count ref={targetRef}>
              {' '}
              {`30%, ${count} человек`}
            </Count>
          </Title>
        </Column>
      </FlexSection>
    </>
  );
}

export default Violence;
