---
name: 'storybook/features'
root: 'src'
output: '.'
questions:
  name: 'Please enter a component name.'
  feature: 'Entry any feature ?'
  directory:
    message: 'Select a directory ?'
    multiple: false
    choices:
      - 'components'
      - 'pages'
    initial: ['components']
---

# `features/{{ inputs.feature | pascal }}/stories/{{ inputs.directory }}/{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from '@/features/{{ inputs.feature | pascal }}/{{ inputs.directory }}/{{ inputs.name | pascal }}';

const meta = {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;

```
