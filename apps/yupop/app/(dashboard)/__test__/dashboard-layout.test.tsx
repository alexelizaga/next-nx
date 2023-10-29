import { render } from '@testing-library/react';

import DashboardLayout from '../layout';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: () => ({
    pathname: '/',
    startsWith: () => true
  })
}));

describe('Test DashboardLayout', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });
});
