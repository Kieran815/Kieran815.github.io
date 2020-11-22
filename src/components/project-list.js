import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import React from 'react';
import Icon from './icon';
import TechList from './tech-list';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH2 } from './_shared/styled-headings';
import { flexEnd } from './_shared/styled-mixins';
import { StyledTextSection } from './_shared/styled-text-section';
import { StyledImageContainer } from './_shared/styled-image-container';

const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--body-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  & svg {
    fill: currentColor;
    margin: 0 0.5rem;
  }
`;
const StyledInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledProjectText = styled(StyledTextSection)`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

const ProjectList = ({ projects }) => {
  return projects.map((project) => {
    const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid.originalImg : null;
    console.log({coverImage})
    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const demoLinkLabel = `project ${title} demo`;
    const repoLinkLabel = `project ${title} repo`;

    return (
      <StyledProject key={title}>
        <StyledHeader>
          <a
            aria-label={demoLink ? demoLinkLabel : repoLink ? repoLinkLabel : `featured project ${title}`}
            href={demoLink ? demoLink : repoLink ? repoLink : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {coverImage && (
              <StyledImageContainer hasHover>
                <Img fluid={coverImage} />
              </StyledImageContainer>
            )}
          </a>
          <StyledContentLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledContentLink>
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener noreferrer" title="Repository Link" aria-label={repoLinkLabel}>
                <Icon icon="github" prefix="fab" />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" title="Demo Link" aria-label={demoLinkLabel}>
                <Icon icon="external-link-alt" />
              </a>
            )}
          </StyledLinkContainer>
        </StyledHeader>
        <StyledInfoContainer>
          <StyledProjectText dangerouslySetInnerHTML={{ __html: project.html }} />

        </StyledInfoContainer>
      </StyledProject>
    );
  });
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
