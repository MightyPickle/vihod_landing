import React from 'react';
import { CustomTooltipWrapper } from '../rechartComponents/styledTooltipWrapper';

function CustomTooltipSocial({ active, payload, label }) {
  if (active) {
    console.log(payload);

    return (
      <CustomTooltipWrapper>
        <p style={{ color: payload[0].stroke }}>
          {payload[0].name}
          :
          {' '}
          {payload[0].payload.cisAmount}

        </p>
        <p style={{ color: payload[1].stroke }}>
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
