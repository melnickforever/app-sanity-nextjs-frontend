jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

import { render, screen } from '@testing-library/react';
import PaginationControls from '../components/PaginationControls';

describe('PaginationControls', () => {
  it('renders nothing if only one page', () => {
    const { container } = render(<PaginationControls currentPage={1} totalPages={1} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders controls and disables prev on first page', () => {
    render(<PaginationControls currentPage={1} totalPages={3} />);
    expect(screen.getByText(/1 \/ 3/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled();
  });

  it('disables next on last page', () => {
    render(<PaginationControls currentPage={3} totalPages={3} />);
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });
});
