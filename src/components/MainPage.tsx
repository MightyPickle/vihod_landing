import { motion, useScroll, useSpring } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Path1 from './PathElems/Path1';
import Path2 from './PathElems/Path2';
import PortraitInformation from './PortraitInformation/PortraitInformation';
import { useDataContext } from '../context/dataContext';

import Menu from './Menu';

const Container = styled(motion.div)<{ $dark: boolean }>`
width: 100vw;
height: 100vh;
padding: 10px 60px 20px 60px;
background: white;
position: relative;
overflow: hidden;
background-color: ${(props) => (props.$dark ? 'var(--dark)' : 'var(--light)')};
color: ${(props) => (props.$dark ? 'var(--light)' : 'var(--darks)')};
transition: .5s ease;
display: flex;
flex-direction: column;
align-items: center;
`;

const Wrapper = styled(motion.div)<{ $dark: boolean }>`
background-color: ${(props) => (props.$dark ? 'rgba(65, 58, 46, 0.59)' : 'rgba(244, 243, 238, 0.81)')};
box-shadow: ${(props) => (props.$dark ? '0 4px 30px rgba(0, 0, 0, 0.25)' : '0 4px 30px rgba(0, 0, 0, 0.25)')};
border: ${(props) => (props.$dark ? '1px solid rgba(65, 58, 46, 1)' : '1px solid rgba(244, 243, 238, 1)')};
border-radius: 16px;
backdrop-filter: blur(5.8px);
-webkit-backdrop-filter: blur(5.8px);
width: 100%;
height: 100%;
padding: 30px;
overflow: scroll;
position: relative;
&::-webkit-scrollbar {
  display: none;
}
transition: .5s ease;
`;

const ScrollProgress = styled(motion.div)`
position: fixed;
top: 0px;
left: 0;
right: 0;
height: 15px;
background: rgba(150, 154, 255, 0.42);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.6px);
-webkit-backdrop-filter: blur(1.6px);
transform-origin: 0%;
`;

function MainPage() {
  // @ts-ignore
  const { regionData } = useDataContext();
  // eslint-disable-next-line no-console
  console.log(regionData);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isDark, setIsDark] = useState(false);

  const toggleSwitch = () => setIsDark((p) => !p);

  return (
    <Container
      $dark={isDark}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }}
    >
      <Path1 />
      <Path2 />
      <ScrollProgress style={{ scaleX }} />
      <Menu isDark={isDark} onClick={toggleSwitch} />
      <Wrapper $dark={isDark} ref={scrollRef}>
        <h1>Доклад о положении ЛГБТ+ людей в России в 2022 году</h1>
        <PortraitInformation />
      </Wrapper>

    </Container>
  );
}

export default MainPage;
