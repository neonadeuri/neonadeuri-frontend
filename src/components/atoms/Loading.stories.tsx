import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'atoms/Loading',
  component: Loading,
  argTypes: {
    size: {
      options: ['sm', 'xs', 'lg', 'base', 'xl', '2xl'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const LoadingTemp = Template.bind({});
