import { Meta, StoryObj } from '@storybook/react';

import { Example } from '.';

const meta = {
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    text: 'Story',
  },
};
