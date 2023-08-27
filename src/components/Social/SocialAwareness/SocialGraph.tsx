import React from 'react';
import {
  Area, CartesianGrid, XAxis, YAxis, Tooltip,
} from 'recharts';
import { filterDataByEnum } from '../../../data/utils/filterDataByEnum';
import { NO, YES } from '../../../data/const';
import CustomTooltipSocial from '../CustomTooltipSocial';
import { UserPortraitQuestions } from '../../../data/enums/portrait/enumQuestionsPortrait';
import { StyledAreaChart } from '../Style';

function SocialGraph({ awareData, totalCis, totalTrans }) {
  if (awareData) {
    const awareDataTrans = Object.values(awareData).map((el) => (filterDataByEnum(el, UserPortraitQuestions.TRANSGENDER_IDENTITY, YES)).map((e) => Object.values(e)));
    const awareDataCis = Object.values(awareData).map((el) => (filterDataByEnum(el, UserPortraitQuestions.TRANSGENDER_IDENTITY, NO)).map((e) => Object.values(e)));

    const data = [
      {
        name: 'Большинство',
        cis: (awareDataCis[0].length * 100) / totalCis,
        cisAmount: awareDataCis[0].length,
        trans: (awareDataTrans[0].length * 100) / totalTrans,
        transAmount: awareDataTrans[0].length,
      },
      {
        name: 'Самые близкие',
        cis: (awareDataCis[2].length * 100) / totalCis,
        cisAmount: awareDataCis[2].length,
        trans: (awareDataTrans[2].length * 100) / totalTrans,
        transAmount: awareDataTrans[2].length,
      },
      {
        name: 'Никто',
        cis: (awareDataCis[1].length * 100) / totalCis,
        cisAmount: awareDataCis[1].length,
        trans: (awareDataTrans[1].length * 100) / totalTrans,
        transAmount: awareDataTrans[1].length,
      },

    ];
    return (
      <StyledAreaChart
        width={700}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorCis" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTrans" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickMargin={10} />
        <YAxis unit="%" />
        <Tooltip content={<CustomTooltipSocial />} />
        <Area type="monotone" dataKey="cis" stroke="#8884d8" fill="url(#colorCis)" />
        <Area type="monotone" dataKey="trans" stroke="#82ca9d" fill="url(#colorTrans)" />
      </StyledAreaChart>
    );
  }
}

export default SocialGraph;
