import React from 'react';
import { CustomTooltipWrapper } from '../rechartComponents/styledTooltipWrapper';

function CustomTooltipSocial({ active, payload, label }) {
  if (active) {
    return (
      <CustomTooltipWrapper>
        <p>
          {payload[0].name}
          :
          {' '}
          {payload[0].payload.cisAmount}

        </p>
        <p>
          {payload[1].name}
          :
          {' '}
          {payload[0].payload.transAmount}
        </p>

      </CustomTooltipWrapper>
    );
  }
  return null;
}

export default CustomTooltipSocial;
