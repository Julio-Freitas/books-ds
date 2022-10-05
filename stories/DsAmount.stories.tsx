import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsAmount } from '../src';
import { IDsAmount } from '../src/components/DsAmount/types';

export default {
  title: 'Components/DsAmount',
  component: DsAmount,
} as ComponentMeta<typeof DsAmount>;

const Template: ComponentStory<typeof DsAmount> = args => (
  <DsAmount {...args} />
);

export const Default = Template.bind({});

Default.args = {
  type: 'primary',
  maxValue: 5,
  onchangeValue:console.log
} as IDsAmount;
