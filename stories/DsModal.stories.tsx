import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DsModal } from '../src';
import { IDsModal } from '../src/components/DsModal/types';

export default {
  title: 'components/DsModal',
  component: DsModal,
} as ComponentMeta<typeof DsModal>;

const Template: ComponentStory<typeof DsModal> = args => (
  <DsModal {...args}>
    <h1>Ola modal</h1>
  </DsModal>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  onClose: console.log,
  status: 'open',
  widthScreen: 100
} as IDsModal;
