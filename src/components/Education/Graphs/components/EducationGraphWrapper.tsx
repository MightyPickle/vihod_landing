import React, { ReactNode } from 'react';
import {
  BarChart, Legend, Tooltip, XAxis,
} from 'recharts';

type Props = {
  children: ReactNode
  data: Record<string, string | number>[]
};

function EducationGraphWrapper({ children, data }: Props) {
  return (
    <BarChart width={600} height={250} data={data}>
      <XAxis dataKey="name" tick={false} />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      {children}
    </BarChart>
  );
}

export default EducationGraphWrapper;
