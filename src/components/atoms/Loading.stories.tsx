import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const LoadingTemp = Template.bind({});
