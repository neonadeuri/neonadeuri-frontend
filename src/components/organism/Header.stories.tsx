import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'templates/Header',
  component: Header,
  // argTypes: {
  //   size: {
  //     options: ['sm', 'xs', 'lg', 'base', 'xl', '2xl'],
  //     control: { type: 'select' },
  //   },
  // },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const LoadingTemp = Template.bind({});
