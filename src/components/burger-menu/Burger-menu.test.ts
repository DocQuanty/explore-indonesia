import { renderHook, act } from '@testing-library/react-hooks';
import useToggleMenu from './Burger-menu.tsx';

test('should toggle menu state', () => {
  const { result } = renderHook(() => useToggleMenu());

  expect(result.current.isMenuOpen).toBe(false);

  act(() => {
    result.current.burgerToggle();
  });

  expect(result.current.isMenuOpen).toBe(true);

  act(() => {
    result.current.burgerToggle();
  });

  expect(result.current.isMenuOpen).toBe(false);
});
