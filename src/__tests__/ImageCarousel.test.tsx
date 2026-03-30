import { render, screen, fireEvent } from '@testing-library/react';
import ImageCarousel from '../components/ImageCarousel';

describe('ImageCarousel', () => {
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
  ];

  it('renders nothing if images is empty', () => {
    const { container } = render(<ImageCarousel images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the first image', () => {
    render(<ImageCarousel images={images} />);
    expect(screen.getByAltText('Project image 1')).toBeInTheDocument();
  });

  it('navigates to next and previous images', () => {
    render(<ImageCarousel images={images} />);
    const nextBtn = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextBtn);
    expect(screen.getByAltText('Project image 2')).toBeInTheDocument();
    const prevBtn = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevBtn);
    expect(screen.getByAltText('Project image 1')).toBeInTheDocument();
  });
});

