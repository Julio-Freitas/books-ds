import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DsGroupOptions } from '../src';
import { IDsGroupOptions } from '../src/components/DsGroupOptions/types';

export default {
  title: 'components/DsGroupOptions',
  component: DsGroupOptions,
} as ComponentMeta<typeof DsGroupOptions>;

const Template: ComponentStory<typeof DsGroupOptions> = (args) => (
  <DsGroupOptions {...args} />
);

export const Default = Template.bind({});

Default.args = {
    options: [
        {
        id: 1,
        body: 'R$0,00',
        title: 'E-book',
        footer: '.pdf, .epub, .mob',
        selected: false
    },
    {
        id: 2,
        body: 'R$20,00',
        title: 'E-book',
        footer: '.pdf, .epub, .mob',
        selected: false
    }
],
onChangeOption: console.log

} as IDsGroupOptions
