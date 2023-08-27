import React, { ReactNode } from 'react';
import {
  BarChart, Legend, Tooltip, XAxis,
} from 'recharts';
import { StylesBarChart } from '../../Style';

type Props = {
  children: ReactNode
  data: Record<string, string | number>[]
};

function EducationGraphWrapper({ children, data }: Props) {
  return (
    <StylesBarChart width={600} height={450} data={data}>
      <XAxis dataKey="name" tick={false} />
      <Tooltip />
      <Legend verticalAlign="top" />
      {children}
    </StylesBarChart>
  );
}

export default EducationGraphWrapper;
