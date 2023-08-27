import React from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { useDataContext } from '../../../context/dataContext';

const enum Circles {
  socialCircleMainlyHeteroCis = 'Гетеросексуальные цисгендерные люди',
  socialCircleMainlyLGBT = 'ЛГБТ+ люди',
  socialCircleEqual = 'ЛГБТ люди и гетеросексуальные цисгендерные люди в равном количестве',
}

function SocialCircle() {
  const { socialCircleDataByRegion } = useDataContext();
  const data = Object.keys(socialCircleDataByRegion).map((key) => ({
    [Circles.socialCircleMainlyLGBT]: socialCircleDataByRegion[key].socialCircleMainlyLGBT, [Circles.socialCircleEqual]: socialCircleDataByRegion[key].socialCircleEqual, [Circles.socialCircleMainlyHeteroCis]: socialCircleDataByRegion[key].socialCircleMainlyHeteroCis, name: key,
  }));
  return (
    <>

      <h4>Основной круг общения по регионам</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
      // height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" angle={80} hide />
          <YAxis />
          <Tooltip />
          <Legend margin={{ top: 20 }} />
          <Bar dataKey={Circles.socialCircleMainlyLGBT} stackId="a" fill="#0088FE" />
          <Bar dataKey={Circles.socialCircleMainlyHeteroCis} stackId="a" fill="#82ca9d" />
          <Bar dataKey={Circles.socialCircleEqual} stackId="a" fill="#8884d8" />

        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default SocialCircle;
