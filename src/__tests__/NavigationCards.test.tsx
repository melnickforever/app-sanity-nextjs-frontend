import { render, screen } from '@testing-library/react';
import NavigationCards from '../components/NavigationCards';

describe('NavigationCards', () => {
  it('renders all navigation cards', () => {
    render(<NavigationCards />);
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/portfolio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
  });
});
