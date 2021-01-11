import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ProgressContainer = styled.div`
  position: fixed;
  height: 10px;
  z-index: 10;
  background: transparent;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const TotalProgress = styled.div`
  background: var(--primary-color);
  height: 10px;
  transform-origin: top-left;
  transform: scale(0, 100);
  opacity: 0;
`;

const ProgressBar = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler)
  });



  return(
    <ProgressContainer>
      <TotalProgress style={{ transform: `scale(${scroll}, 1)`, opacity: "1"}} />
    </ProgressContainer>
  )
}

export default ProgressBar;
