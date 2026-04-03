import { render, screen } from '@testing-library/react';
import PortfolioImage from '../components/PortfolioImage';

describe('PortfolioImage', () => {
  it('renders image with alt text', () => {
    render(<PortfolioImage src="/test.jpg" alt="Test Image" />);
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });
});

