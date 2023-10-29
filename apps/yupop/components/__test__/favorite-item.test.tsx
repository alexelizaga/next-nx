import { fireEvent, render, screen } from '@testing-library/react';

import * as hook from '@/hooks/use-favorite-store';
import FavoriteItem from '@/components/favorite-item';

// Mock useFavoriteStore
jest.mock('@/hooks/use-favorite-store', () => ({
  useFavoriteStore: jest.fn()
}));

describe('Test FavoriteItem', () => {
  const title = 'Sample Title';
  const image = 'https://sample-image.jpg';

  test('should render the title and the image', () => {
    render(<FavoriteItem title={title} image={image} />);

    // Use screen queries to assert that the title and image are rendered
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByAltText(title)).toBeTruthy();
  });

  it('should call remove function from useFavoriteStore when button is clicked', () => {
    // Mock the remove function from useFavoriteStore
    const removeMock = jest.fn();
    jest
      .spyOn(hook, 'useFavoriteStore')
      .mockReturnValue({ remove: removeMock });

    render(<FavoriteItem title={title} image={image} />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    // Ensure that the remove function was called with the correct title
    expect(removeMock).toHaveBeenCalledWith(title);
  });
});
