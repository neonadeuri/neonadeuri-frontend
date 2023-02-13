import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeedBox from './FeedBox';

export default {
  title: 'templates/FeedBox',
  component: FeedBox,
} as ComponentMeta<typeof FeedBox>;

const Template: ComponentStory<typeof FeedBox> = (args) => <FeedBox />;
export const FeedBoxTemp = Template.bind({});
