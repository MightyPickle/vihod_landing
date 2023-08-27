import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import Donate from './PathElems/Donate';

const MenuBar = styled(motion.div)<{ $dark: boolean }>`
background-color: ${(props) => (props.$dark ? 'rgba(65, 58, 46, 0.59)' : 'rgba(244, 243, 238, 0.81)')};
box-shadow: ${(props) => (props.$dark ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.1)')};
border: ${(props) => (props.$dark ? '1px solid rgba(65, 58, 46, 1)' : '1px solid rgba(244, 243, 238, 1)')};
border-radius: 16px;
backdrop-filter: blur(5.8px);
-webkit-backdrop-filter: blur(5.8px);
padding: 5px;
overflow: hidden;
transition: .5s ease;
display: flex;
justify-content: space-around;
width: 180px;
margin-bottom: 5px;
`;

const Handle = styled(motion.div)<{ $dark: boolean }>`
width: 40px;
height: 40px;
background-color: ${(props) => (props.$dark ? 'var(--dark)' : 'var(--light)')};
border-radius: 20px;
`;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

function Menu({ isDark, onClick }: { isDark: boolean; onClick: () => void }) {
  return (
    <div style={{ width: '100%', display: 'flex' }}>

      <MenuBar $dark={isDark}>
        <motion.div className="switch" data-isOn={isDark} onClick={onClick}>
          <Handle $dark={isDark} layout transition={spring} />
        </motion.div>
        <Donate />
      </MenuBar>
    </div>
  );
}

export default Menu;
