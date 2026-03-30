import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});

