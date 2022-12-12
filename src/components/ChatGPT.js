import React from 'react';
import Assistant from 'openai';

const assistant = new Assistant({
  appId: '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',
});

export const ChatGPT = () => {
  return (
    <Assistant
      appId="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"
      onReady={() => console.log('Assistant is ready!')}
      onMessage={message => console.log('Assistant says:', message)}
    />
  );
};
