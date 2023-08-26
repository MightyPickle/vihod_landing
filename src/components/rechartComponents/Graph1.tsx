/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import {
  Pie, PieChart, Cell, Tooltip,
} from 'recharts';
import { useDataContext } from '../../context/dataContext';

function Graph1() {
  const { filteredData } = useDataContext();
  const data = [
    {
      name: 'Гомосексуальные люди',
      value: filteredData.homoData.length,
    },
    {
      name: 'Би/Пансексуальные люди',
      value: filteredData.biPanData.length,
    },
    {
      name: 'Гетеросексуальные люди',
      value: filteredData.heteroData.length,
    },
    {
      name: 'Асексуальные люди',
      value: filteredData.asexData.length,
    },
    {
      name: 'Другое',
      value: filteredData.otherOrientationData.length,
    },
  ];
  const data2 = [
    {
      name: 'Цисгендерные люди',
      value: filteredData.cisData.length,
    },
    {
      name: 'Трансгендерные люди',
      value: filteredData.transData.length,
    }
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <>
        {percent > 0.1 && (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        )}
      </>
    );
  };

  const [activeIndex, setActiveIndex] = useState();

  const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'];
  return (
    <PieChart width={900} height={500}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label={renderCustomizedLabel}

      >
        { data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Pie data={data2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={110} outerRadius={130} fill="#82ca9d" label />
      <Tooltip />
    </PieChart>
  );
}

export default Graph1;