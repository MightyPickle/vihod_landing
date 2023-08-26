import React from 'react';
import { CustomTooltipWrapper } from '../styledTooltipWrapper';

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <CustomTooltipWrapper>
        <p>{payload[0].name}</p>
        <p>{payload[0].value}</p>
      </CustomTooltipWrapper>
    );
  }
  return null;
}

export default CustomTooltip;
