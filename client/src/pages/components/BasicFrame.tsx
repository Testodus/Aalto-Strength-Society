import React from 'react';
import { PageConfig } from '../../assets/pageConfig';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Left',
        height: '100vh',
      }}
    >
      {Title ? <h2>{Title}</h2> : null}
      {TextContent?.length
        ? TextContent.map((text, i) => <p key={'basic-text-' + i}>{text}</p>)
        : null}
    </div>
  );
};

export default BasicFrame;
