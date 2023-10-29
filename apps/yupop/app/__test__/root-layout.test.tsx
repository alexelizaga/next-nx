import React from 'react';
import { render } from '@testing-library/react';

import RootLayout from '../layout';

describe('Test RootLayout', () => {
  it('Renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });
});
