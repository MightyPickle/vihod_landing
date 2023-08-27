import React from 'react';
import SocialGraph from './SocialGraph';

function FamilyGrapgh({ awareData, totalCis, totalTrans }) {
  const { familyAwareData } = awareData;

  return (
    <SocialGraph awareData={familyAwareData} totalCis={totalCis} totalTrans={totalTrans} />
  );
}

export default FamilyGrapgh;
