import { act, renderHook } from '@testing-library/react';
import { useDebounce } from '../use-debounce';

describe('Test useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initialValue', 500));

    expect(result.current).toBe('initialValue');

    act(() => {
      jest.advanceTimersByTime(499);
    });

    expect(result.current).toBe('initialValue');

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(result.current).toBe('initialValue');
  });
});
