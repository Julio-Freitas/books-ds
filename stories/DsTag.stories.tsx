import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsTag } from '../src';
import { IDsTags } from '../src/components/DsTag/types';

export default {
  title: 'components/DsTag',
  component: DsTag,
} as ComponentMeta<typeof DsTag>;

const Template: ComponentStory<typeof DsTag> = args =>   <DsTag {...args} />

export const Tag = Template.bind({});
Tag.args = { text: 'Android' } as IDsTags;
