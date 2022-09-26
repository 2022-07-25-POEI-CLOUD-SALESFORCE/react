import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// test qui vérifie que "copyright" est bien affiché
test('Footer Copyright', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/copyright/i);
  expect(linkElement).toBeInTheDocument();
});
// test qui vérifie que "2022" est bien affiché
  test('Footer 2022', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/2022/i);
    expect(linkElement).toBeInTheDocument();
  });