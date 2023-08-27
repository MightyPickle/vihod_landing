import React, { useEffect, useState } from 'react';
import {
  CardWrapper, Count, Image, ImageAndListWrapper, ListWrapper, Title,
} from './Style';

function StatisticCard() {
  // const { countAnswers } = useDataContext();
  const [count, setCount] = useState(0);
  const targetCount = 8398;
  const duration = 4300;

  useEffect(() => {
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
  }, []);

  return (
    <CardWrapper>
      <Title>
        <Count>{count}</Count>
        <p>анкет было обработано</p>
      </Title>
      <ImageAndListWrapper>
        <Image
          decoding="async"
          alt="sasha_35677_an_illustration_for_a_news_article_about_the_blocki_47cb8900-b6c0-4f24-8266-a6ac5ea78cc1"
          src="https://comingoutspb.org/wp-content/uploads/2023/08/sasha_35677_an_illustration_for_a_news_article_about_the_blocki_47cb8900-b6c0-4f24-8266-a6ac5ea78cc1-1-768x578.png"
        />
        <div>
          <ListWrapper>
            <p>Пути распространения анект:</p>
            <li>Социальные сети «Выхода» и «Сферы»</li>
            <li>Сайте квир-знакомств «Хорнет»</li>
            <li>Таргетированная реклама</li>
            <li>
              Социальные работники, взаимодействующих с труднодоступными
              уязвимыми группами внутри ЛГБТ+ сообществ
            </li>
          </ListWrapper>
        </div>
      </ImageAndListWrapper>
    </CardWrapper>
  );
}

export default StatisticCard;
