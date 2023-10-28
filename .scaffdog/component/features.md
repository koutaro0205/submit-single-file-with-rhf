---
name: 'component/features'
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
  story:
    confirm: 'Do you need a story?'
    initial: true
  test:
    confirm: 'Do you need a test?'
    initial: true
---

# `features/{{ inputs.feature | pascal }}/{{ inputs.directory }}/{{ inputs.name | pascal }}/index.tsx`

```typescript
import React from 'react';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};

```

# `features/{{ inputs.feature | pascal }}/{{ inputs.directory }}/{{ inputs.name | pascal }}/styles.ts`

```typescript
import { css } from '@emotion/react';

export const styles = {
  container: css({}),
};
```

# `features/{{ inputs.feature | pascal }}/stories/{{ inputs.directory }}/{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/index.stories.tsx`

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

# `features/{{ inputs.feature | pascal }}/tests/{{ inputs.directory }}/{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/index.spec.tsx`

```typescript
import { render } from '@testing-library/react';
import React from 'react';

import { {{ inputs.name | pascal }} } from '@/features/{{ inputs.feature | pascal }}/{{ inputs.directory }}/{{ inputs.name | pascal }}';

describe('renders a {{ inputs.name | pascal }}', () => {
  test('default', () => {
    const element = render(<{{ inputs.name | pascal }} />);
    expect(element).toMatchSnapshot();
  });
});

```
