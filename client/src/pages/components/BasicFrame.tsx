import React from 'react';
import { PageConfig } from '../../assets/pageConfig';
import styled from 'styled-components';
import {
  Heading2,
  Bodytext,
  RoundDivLarge,
  PaddingEl,
} from '../../assets/styles/shared-styles';

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 62rem;
  width: 90%;
  text-align: left;
  align-items: start;
  margin: 1rem 0 1rem 0;
  background: none;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

type BasicFrameProps = {
  topic: string;
};

/** The basic frame for a simple page, will probably end removing this since we do not really have need for creating identical layouts :D
 *
 * and the page structure will most certainly depend on the page-content.
 *
 * BUT for now it is used to compose the static dummy pages quickly
 */
const BasicFrame = ({ topic }: BasicFrameProps) => {
  const Title: string | undefined = PageConfig.find(page => page.name === topic)
    ?.title;

  const TextContent: Array<string> | undefined = PageConfig.find(
    page => page.name === topic
  )?.textContent;

  return (
    <RoundDivLarge>
      <ContentFrame>
        <PaddingEl>
          {Title ? <Heading2>{Title}</Heading2> : null}
          {TextContent?.length
            ? TextContent.map((text, i) => (
                <Bodytext key={'basic-text-' + i}>{text}</Bodytext>
              ))
            : null}
        </PaddingEl>
      </ContentFrame>
    </RoundDivLarge>
  );
};

export default BasicFrame;
