import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip,
} from 'recharts';
import { filterDataByEnum } from '../../../data/utils/filterDataByEnum';
import { NO, YES } from '../../../data/const';
import CustomTooltipSocial from './CustomTooltipSocial';
import { UserPortraitQuestions } from '../../../data/enums/portrait/enumQuestionsPortrait';

function SocialGraph({ awareData, totalCis, totalTrans }) {
  if (awareData) {
    const awareDataTrans = Object.entries(awareData).reduce((acc, el) => ({ ...acc, [el[0]]: filterDataByEnum(el[1], UserPortraitQuestions.TRANSGENDER_IDENTITY, YES) }), {} as typeof awareData);
    const awareDataCis = Object.entries(awareData).reduce((acc, el) => ({ ...acc, [el[0]]: filterDataByEnum(el[1], UserPortraitQuestions.TRANSGENDER_IDENTITY, NO) }), {} as typeof awareData);

    const data = [
      {
        name: 'majority',
        cis: (awareDataCis.majorityFriendsAwareData.length * 100) / totalCis,
        cisAmount: awareDataCis.majorityFriendsAwareData.length,
        trans: (awareDataTrans.majorityFriendsAwareData.length * 100) / totalTrans,
        transAmount: awareDataTrans.majorityFriendsAwareData.length,
      },
      {
        name: 'closest',
        cis: (awareDataCis.closestFriendsAwareData.length * 100) / totalCis,
        cisAmount: awareDataCis.closestFriendsAwareData.length,
        trans: (awareDataTrans.closestFriendsAwareData.length * 100) / totalTrans,
        transAmount: awareDataTrans.closestFriendsAwareData.length,
      },
      {
        name: 'no',
        cis: (awareDataCis.noFriendsAwareData.length * 100) / totalCis,
        cisAmount: awareDataCis.noFriendsAwareData.length,
        trans: (awareDataTrans.noFriendsAwareData.length * 100) / totalTrans,
        transAmount: awareDataTrans.noFriendsAwareData.length,
      },

    ];
    return (
    // <ResponsiveContainer width="50%" height="30%">
      <AreaChart
        width={500}
        height={400}
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
        {/* <Area type="monotone" dataKey="amt" stroke="#ffc658" fill="#ffc658" /> */}
      </AreaChart>
    // </ResponsiveContainer>
    );
  }
}

export default SocialGraph;
