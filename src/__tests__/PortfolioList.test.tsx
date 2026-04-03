import { render, screen } from '@testing-library/react';
jest.mock('@/lib/Sanity/ImageUrl', () => ({
  urlFor: () => ({ width: () => ({ height: () => ({ url: () => '/mock-image.jpg' }) }) })
}));
jest.mock('@portabletext/react', () => ({ PortableText: () => null }));
import PortfolioList from '../components/PortfolioList';

describe('PortfolioList', () => {
  const projects = [
    {
      slug: { current: 'test-project' },
      mainImage: null,
      title: 'Test Project',
      description: 'A test project',
    },
  ];

  it('renders project titles', () => {
    // @ts-ignore
    render(<PortfolioList projects={projects} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders nothing if projects is empty', () => {
    const { container } = render(<PortfolioList projects={[]} />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
