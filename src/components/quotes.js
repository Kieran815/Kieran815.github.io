import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledQuoteNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .number {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  & > .quote {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

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
`;

const StyledContainer = styled.div`
  background-image: linear-gradient(to bottom right, rgba(46, 49, 49, 0.5), rgba(189, 195, 199, 0.5));
  padding: 2em;
  border-radius: 3em;
  border: 2px solid rgba(189, 195, 199, 0.3);
  backdrop-filter: blur(10px);
`

const Quotes = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://type.fit/api/quotes"
    }).then(res => {
      setData(res.data)
    })
  }, []);

  
  return (
    <StyledSkewedSection angle={10}>
      <StyledContainer>
        <StyledH1>Some Interesting Quotes</StyledH1>
        <StyledLogoSection>
          <StyledQuoteNumber>
            <span className="number">53</span>
            <span className="quote">Github Repositories</span>
          </StyledQuoteNumber>
          <StyledQuoteNumber>
            <span className="number">321</span>
            <span className="quote">Happy Customers</span>
          </StyledQuoteNumber>
          <StyledQuoteNumber>
            <span className="number">863</span>
            <span className="quote">Freelancing Hours</span>
          </StyledQuoteNumber>
        </StyledLogoSection>
      </StyledContainer>
    </StyledSkewedSection>
  );
};

export default Quotes;
