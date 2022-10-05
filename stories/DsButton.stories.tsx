import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsButton } from '../src';
import { IDSButton } from '../src/components/DsButton/types';
export default {
  title: 'Components/DsButton',
  component: DsButton,
} as ComponentMeta<typeof DsButton>;

const Template: ComponentStory<typeof DsButton> = args => (
  <DsButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  typeButton: 'primary',
  text: 'Button',
  onClick: () => {},
} as IDSButton;

export const Secondary = Template.bind({});

Secondary.args = {
  typeButton: 'secondary',
  text: 'Button 2',
  onClick: () => {},
} as IDSButton;
