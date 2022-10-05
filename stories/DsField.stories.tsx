import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsField } from '../src';
import { IDsField } from '../src/components/DsField/type';

export default {
  title: 'components/DsField',
  component: DsField,
} as ComponentMeta<typeof DsField>;

const Template: ComponentStory<typeof DsField> = args => <DsField {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'text',
  label: 'Email',
  onChangeValue:console.log
} as IDsField;
