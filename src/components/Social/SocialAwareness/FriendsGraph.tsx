import React from 'react';
import { useDataContext } from '../../context/dataContext';
import SocialGraph from './SocialGraph';

function FriendsGraph({ awareData, totalCis, totalTrans }) {
  const { friendsAwareData } = awareData;

  return (
    <SocialGraph awareData={friendsAwareData} totalCis={totalCis} totalTrans={totalTrans} />
  );
}

export default FriendsGraph;
