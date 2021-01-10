import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledQuote = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  width: 100%;

  & > .author {
    background-image: linear-gradient(to bottom right, rgba(46, 49, 49, 0.6), rgba(0, 0, 0, 0.6));
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    border-radius: 1em;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }

  & > .quote {
    background-image: linear-gradient(to bottom right, rgba(46, 49, 49, 0.6), rgba(0, 0, 0, 0.6));
    text-align: center;
    border-radius: 1em;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 900;
  }
`;

const StyledContainer = styled.div`
  background-image: linear-gradient(to bottom right, rgba(46, 49, 49, 0.5), rgba(189, 195, 199, 0.5));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 3em;
  border: 2px solid rgba(189, 195, 199, 0.3);
  backdrop-filter: blur(10px);
`;

export const StyledSup = styled.p`
  width: 100%;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px rgba(46, 49, 49, 0.5);
`;

const Quotes = () => {

  const [data, setData] = useState([]);
  const [randoNum, setRandoNum] = useState([Math.floor(Math.random() * 1600)]);
  // random item from `data`
  const rando = [Math.floor(Math.random() * data.length)];

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://type.fit/api/quotes"
    }).then(res => {
      setData(res.data)
    })
  }, []);

  const newRandom = () => {
    setRandoNum(rando);
  }



  return (
    <StyledSkewedSection angle={10}>
      <StyledContainer onClick={newRandom}>
        <StyledH1 style={{ textShadow: "2px 2px rgba(46, 49, 49, 0.5)" }}>Be Inspired to Go the Distance</StyledH1>
        <StyledSup>(click for new quote)</StyledSup>
        {data.length > 0 ?
          <StyledQuote>
            <span className="quote">"{data[randoNum].text}"</span>
            {/* conditional rendering if author not listed */}
            {data[randoNum].author != null ?
              <span className="author"> {data[randoNum].author}</span>:
              ""
            }

          </StyledQuote>:
          ""
        }

      </StyledContainer>
    </StyledSkewedSection>
  );
};

export default Quotes;
