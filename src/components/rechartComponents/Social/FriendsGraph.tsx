import React from 'react';
import { useDataContext } from '../../../context/dataContext';
import SocialGraph from './SocialGraph';

function FriendsGraph() {
  const { cisTransData, awareData } = useDataContext();
  const { friendsAwareData } = awareData;
  const totalCis = cisTransData.cisData.length;
  const totalTrans = cisTransData.transData.length;
  return (
    <SocialGraph awareData={friendsAwareData} totalCis={totalCis} totalTrans={totalTrans} />
  );
}

export default FriendsGraph;
