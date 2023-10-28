---
name: 'storybook/common'
root: 'src'
output: '.'
questions:
  name: 'Please enter a component name.'
  directory:
    message: 'Select a directory ?'
    multiple: false
    choices:
      - 'elements'
      - 'layouts'
      - 'pages'
    initial: ['elements']
---

# `common/stories/components/{{ inputs.directory }}/{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from '@/common/components/{{ inputs.directory }}/{{ inputs.name | pascal }}';

const meta = {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;

```
