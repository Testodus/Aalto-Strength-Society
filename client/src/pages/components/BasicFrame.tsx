import React from 'react';
import { PageConfig } from '../../assets/pageConfig';
import styled from 'styled-components';
import { Heading2, Bodytext } from '../../shared-styles';

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  text-align: left;
  align-items: start;
  margin: 3rem 0 3rem 0;
  padding: 1rem;
  background: none;
`;

type BasicFrameProps = {
  topic: string;
};

const BasicFrame = ({ topic }: BasicFrameProps) => {
  const Title: string | undefined = PageConfig.find(page => page.name === topic)
    ?.title;

  const TextContent: Array<string> | undefined = PageConfig.find(
    page => page.name === topic
  )?.textContent;

  return (
    <ContentFrame>
      {Title ? <Heading2>{Title}</Heading2> : null}
      {TextContent?.length
        ? TextContent.map((text, i) => (
            <Bodytext key={'basic-text-' + i}>{text}</Bodytext>
          ))
        : null}
    </ContentFrame>
  );
};

export default BasicFrame;
