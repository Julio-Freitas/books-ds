import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsCard } from '../src';

export default {
  title: 'components/DsCard',
  component: DsCard,
} as ComponentMeta<typeof DsCard>;

const Template: ComponentStory<typeof DsCard> = args => <DsCard ><h1>Component Card</h1></DsCard>;

export const CardComponent = Template.bind({ onClick: () => {} });
