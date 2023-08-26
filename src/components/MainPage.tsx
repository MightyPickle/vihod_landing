import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import Path1 from './PathElems/Path1';
import Path2 from './PathElems/Path2';
import PortraitInformation from './PortraitInformation/PortraitInformation';
import { useDataContext } from '../context/dataContext';
import FriendsGraph from './rechartComponents/Social/FriendsGraph';

const Container = styled(motion.div)`
width: 100vw;
height: 100vh;
padding: 40px 60px;
background: white;
position: relative;
overflow: hidden;
`;

const Wrapper = styled(motion.div)`
background: rgba(244, 243, 238, 0.81);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(5.8px);
-webkit-backdrop-filter: blur(5.8px);
border: 1px solid rgba(244, 243, 238, 1);
width: 100%;
height: 100%;
padding: 20px;
overflow: scroll;
`;

function MainPage() {
  // @ts-ignore
  const { regionData } = useDataContext();
  // eslint-disable-next-line no-console
  console.log(regionData);
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }}
    >
      <Path1 />
      <Path2 />
      <Wrapper>
        <h1>Доклад о положении ЛГБТ+ людей в России в 2022 году</h1>
        <PortraitInformation />
        <FriendsGraph />
      </Wrapper>

    </Container>
  );
}

export default MainPage;
