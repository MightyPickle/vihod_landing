import React from 'react';
import SocialGraph from './SocialGraph';

function SchoolAndWorkGraph({ awareData, totalCis, totalTrans }) {
  const { classmatesColleaguesAwareData } = awareData;

  return (
    <SocialGraph awareData={classmatesColleaguesAwareData} totalCis={totalCis} totalTrans={totalTrans} />
  );
}

export default SchoolAndWorkGraph;
